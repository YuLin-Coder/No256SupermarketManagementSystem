package com.controller;

import java.io.File;

import java.io.IOException;

import java.io.PrintWriter;
import java.sql.Timestamp;
import java.util.HashMap;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.entity.Sysuser;
import com.server.SysuserServier;
import com.util.Info;
import com.util.PageBean;

import net.sf.json.JSONObject;

@Controller
public class SysuserController {
	@Resource
	private SysuserServier userService;

	@RequestMapping("admin/showUserInfo.do")
	public String showUserInfo(ModelMap map, HttpSession session) {
		if (session.getAttribute("auser") == null) {
			return "admin/login";
		}
		Sysuser u = (Sysuser) session.getAttribute("auser");
		map.put("user", userService.getById(u.getId()));
		return "admin/user_update_persion";
	}

	@RequestMapping("admin/updatePersionUser.do")
	public String updateUserInfo(ModelMap map, HttpSession session, Sysuser user) {
		userService.update(user);
		map.put("user", userService.getById(user.getId()));
		session.setAttribute("suc", "cc");
		return "redirect:showUserInfo.do";
	}

	@RequestMapping("admin/login.do")
	public String aLogin() {
		return "admin/login";
	}

	// 文件上传
	public String fileUpload(@RequestParam(value = "file", required = false) MultipartFile file,
			HttpServletRequest request, String img) {
		String path = request.getSession().getServletContext().getRealPath("upload");
		System.out.println("path===" + path);
		System.out.println("file===" + file);
		String fileName = file.getOriginalFilename();
		System.out.println("fileName===" + fileName);
		File targetFile = new File(path, fileName);
		if (!targetFile.exists()) {
			targetFile.mkdirs();
		}
		try {
			file.transferTo(targetFile);
		} catch (IllegalStateException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		String pa = request.getContextPath() + "/upload/" + fileName;
		System.out.println("path===" + pa);
		if (fileName != null && !fileName.equals("")) {
			img = fileName;
		} else {
			img = null;
		}

		return img;

	}

	// 后台登录
	@RequestMapping("admin/alogin.do")
	public String checkLogin(Sysuser user, HttpSession session) {
		Map<String, Object> u = new HashMap<String, Object>();
		System.out.println("name===" + user.getUname());
		System.out.println("pwd===" + user.getPwd());
		u.put("uname", user.getUname());
		u.put("utype", user.getUtype());
		u.put("pwd", user.getPwd());
		user = userService.adminLogin(u);
		if (user != null) {
			session.setAttribute("auser", user);
			System.out.println("auser=" + user);
			return "admin/index2";
		} else {

			return "admin/login";
		}
	}

	// 后台注销登录
	@RequestMapping("admin/loginout.do")
	public String adminLoginOut(HttpSession session) {
		session.removeAttribute("auser");
		return "redirect:login.do";
	}

	// 验证用户名是否存在
	@RequestMapping("admin/checkUname.do")
	public void checkUname(Sysuser user, HttpServletResponse response) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("uname", user.getUname());
		System.out.println("uname===" + user.getUname());
		System.out.println("uname222===" + userService.checkUname(map));
		JSONObject obj = new JSONObject();
		if (userService.checkUname(map) != null) {

			obj.put("info", "ng");
		} else {
			obj.put("info", "用户名可以用！");

		}
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = null;
		try {
			out = response.getWriter();
			out.print(obj);
			out.flush();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			out.close();
		}
	}

	// 添加用户
	@RequestMapping("admin/addUser.do")
	public String addUser(Sysuser user, HttpSession session) {

		Timestamp time = new Timestamp(System.currentTimeMillis());
		user.setPubtime(time.toString().toString().substring(0, 19));
		userService.add(user);
		return "redirect:userList.do";
	}

	// 管理员注册
	@RequestMapping("admin/addUser2.do")
	public String addUser2(Sysuser user, HttpSession session) {

		Timestamp time = new Timestamp(System.currentTimeMillis());
		user.setPubtime(time.toString());
		userService.add(user);
		return "admin/login";
	}

	// 处理更新用户的信息
	@RequestMapping("admin/doUpdateUser.do")
	public String doUpdateUser(ModelMap map, int id) {
		System.out.println("id==" + id);
		map.put("user", userService.getById(id));
		return "admin/user_update";
	}

	// 更新用户的信息
	@RequestMapping("admin/updateUser.do")
	public String updateUser(Sysuser user) {
		userService.update(user);
		return "redirect:userList.do";
	}

	// 查询所有用户的信息
	@RequestMapping("admin/userList.do")
	public String userList(@RequestParam(value = "page", required = false) String page, HttpSession session,
			ModelMap map) {
		if (page == null || page.equals("")) {
			page = "1";
		}
		PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
		Map<String, Object> pmap = new HashMap<String, Object>();
		pmap.put("pageno", pageBean.getStart());
		pmap.put("pageSize", pageBean.getPageSize());
		Map<String, Object> cmap = new HashMap<String, Object>();
		pmap.put("utype", "销售员");
		cmap.put("utype", "销售员");
		int total = userService.getCount(cmap);
		pageBean.setTotal(total);
		List<Sysuser> list = userService.getByPage(pmap);
		map.put("page", pageBean);
		map.put("list", list);
		session.setAttribute("p", 1);
		return "admin/user_list";
	}

	// 模糊查询并分页
	@RequestMapping("admin/userListQuery.do")
	public String useListQuery(@RequestParam(value = "page", required = false) String page, HttpSession session,
			ModelMap map, Sysuser user) {
		if (page == null || page.equals("")) {
			page = "1";
		}
		PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
		Map<String, Object> pmap = new HashMap<String, Object>();
		pmap.put("pageno", pageBean.getStart());
		pmap.put("pageSize", pageBean.getPageSize());
		Map<String, Object> cmap = new HashMap<String, Object>();
		if (user.getUname() != null && !user.getUname().equals("")) {
			pmap.put("uname", user.getUname());
			cmap.put("uname", user.getUname());
		}
		pmap.put("utype", "销售员");
		cmap.put("utype", "销售员");
		int total = userService.getCount(cmap);
		pageBean.setTotal(total);
		List<Sysuser> list = userService.getByPage(pmap);
		map.put("page", pageBean);
		map.put("list", list);
		session.setAttribute("p", 2);
		return "admin/user_list";
	}

	@RequestMapping("admin/deleteUser.do")
	public String deleteUser(int id) {
		userService.delete(id);
		return "admin/success";
	}

	/**
	 * ===会员管理====
	 * 
	 * @param page
	 * @param session
	 * @param map
	 * @return
	 */

	// 查询所有会员的信息
	@RequestMapping("admin/userList_hy.do")
	public String userList_hy(@RequestParam(value = "page", required = false) String page, HttpSession session,
			ModelMap map) {
		Sysuser user = (Sysuser) session.getAttribute("auser");
		if (user == null) {
			return "admin/login";
		} else {
			if (page == null || page.equals("")) {
				page = "1";
			}
			PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
			Map<String, Object> pmap = new HashMap<String, Object>();
			pmap.put("pageno", pageBean.getStart());
			pmap.put("pageSize", pageBean.getPageSize());
			Map<String, Object> cmap = new HashMap<String, Object>();
			if (user.getUtype().equals("销售员")) {
				pmap.put("xid", user.getId());
				cmap.put("xid", user.getId());
			}
			pmap.put("utype", "会员");
			cmap.put("utype", "会员");
			int total = userService.getCount(cmap);
			pageBean.setTotal(total);
			List<Sysuser> list = userService.getByPage(pmap);
			map.put("page", pageBean);
			map.put("list", list);
			session.setAttribute("p", 1);
			map.put("ulist", userService.getAll(null));
			return "admin/user_list_hy";
		}

	}

	// 模糊查询并分页
	@RequestMapping("admin/userList_hyQuery.do")
	public String userList_hyQuery(@RequestParam(value = "page", required = false) String page, HttpSession session,
			ModelMap map, Sysuser user) {
		Sysuser u = (Sysuser) session.getAttribute("auser");
		if (u == null) {
			return "admin/login";
		} else {
			if (page == null || page.equals("")) {
				page = "1";
			}
			PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
			Map<String, Object> pmap = new HashMap<String, Object>();
			pmap.put("pageno", pageBean.getStart());
			pmap.put("pageSize", pageBean.getPageSize());
			Map<String, Object> cmap = new HashMap<String, Object>();
			if (user.getUname() != null && !user.getUname().equals("")) {
				pmap.put("uname", user.getUname());
				cmap.put("uname", user.getUname());
			}
			if (user.getTname() != null && !user.getTname().equals("")) {
				pmap.put("tname", user.getTname());
				cmap.put("tname", user.getTname());
			}
			if (u.getUtype().equals("销售员")) {
				pmap.put("xid", u.getId());
				cmap.put("xid", u.getId());
			}
			pmap.put("utype", "会员");
			cmap.put("utype", "会员");
			int total = userService.getCount(cmap);
			pageBean.setTotal(total);
			List<Sysuser> list = userService.getByPage(pmap);
			map.put("page", pageBean);
			map.put("list", list);
			session.setAttribute("p", 2);
			return "admin/user_list_hy";
		}
	}

	// 添加会员
	@RequestMapping("admin/addUser_hy.do")
	public String addUser_hy(Sysuser user, HttpSession session) {
		Sysuser u = (Sysuser) session.getAttribute("auser");
		if (u == null) {
			return "admin/login";
		} else {
			//user.setUname(Info.getID());
			user.setIdcard(Info.getID());
			Timestamp time = new Timestamp(System.currentTimeMillis());
			user.setPubtime(time.toString().toString().substring(0, 19));
			user.setXid(u.getId());
			userService.add(user);
			return "redirect:userList_hy.do";
		}
	}

	@RequestMapping("admin/updateUser_hy.do")
	public String updateUser_hy(Sysuser user) {
		userService.update(user);
		return "redirect:userList_hy.do";
	}

	@RequestMapping("admin/doUpdateUser_hy.do")
	public String doUpdateUser_hy(ModelMap map, int id) {
		System.out.println("id==" + id);
		map.put("user", userService.getById(id));
		return "admin/user_update_hy";
	}

}

package com.controller;

import java.io.File;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import com.entity.Goods;
import com.entity.Record;
import com.entity.Sysuser;
import com.server.FtypeServer;
import com.server.GoodsServer;
import com.server.RecordServer;
import com.server.SysuserServier;
import com.server.ForderServer;
import com.server.FshopServer;
import com.util.PageBean;

@Controller
public class RecordController {
	@Resource
	private RecordServer recordService;
	@Resource
	private GoodsServer goodsService;
	@Resource
	private FtypeServer typeService;
	@Resource
	private ForderServer orderService;
	@Resource
	private SysuserServier userService;
	@Resource
	private FshopServer shopService;

	/**
	 * ===补货记录管理====
	 * 
	 * @param map
	 * @return
	 */
	@RequestMapping("admin/doAddRecord.do")
	public String doAddRecord(ModelMap map, int id) {
		Goods goods = goodsService.getById(id);
		map.put("goods", goods);
		return "admin/record_add";
	}

	@RequestMapping("admin/addRecord.do")
	public String addRecord(HttpServletRequest request, Record Record, HttpSession session) {
		System.out.println("ddddd");
		Sysuser u = (Sysuser) session.getAttribute("auser");
		System.out.println("u=-=" + u);
		if (u == null || u.equals("")) {
			return "admin/login";
		} else {
			java.sql.Timestamp time = new Timestamp(System.currentTimeMillis());
			Record.setStime(time.toString().substring(0, 19));
			Record.setBtype("补货");
			Goods goods = goodsService.getById(Record.getGid());
			goods.setKcnum(goods.getKcnum() + Record.getSnum());
			Record.setUid(u.getId());
			recordService.add(Record);
			goodsService.update(goods);
			return "admin/success";
		}
	}

	@RequestMapping("admin/doUpdateRecord.do")
	public String doUpdateRecord(ModelMap map, int id) {
		Record record  = recordService.getById(id);
		Goods goods = goodsService.getById(record.getGid());
		map.put("record", record);
		map.put("goods", goods);
		return "admin/record_update";
	}

	@RequestMapping("admin/updateRecord.do")
	public String updateRecord(HttpServletRequest request, Record Record) {
		Record rec = recordService.getById(Record.getId());
		Goods goods = goodsService.getById(rec.getGid());
		goods.setKcnum(goods.getKcnum() - rec.getSnum() + Record.getSnum());
		recordService.update(Record);
		goodsService.update(goods);
		return "admin/success";
	}

	// 分页查询
	@RequestMapping("admin/recordList.do")
	public String jianList(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session) {
		if (page == null || page.equals("")) {
			page = "1";
		}
		PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
		Map<String, Object> pmap = new HashMap<String, Object>();
		pmap.put("pageno", pageBean.getStart());
		pmap.put("pageSize", pageBean.getPageSize());
		Map<String, Object> cmap = new HashMap<String, Object>();
		pmap.put("btype", "补货");
		cmap.put("btype", "补货");
		int total = recordService.getCount(cmap);
		pageBean.setTotal(total);
		List<Record> list = recordService.getByPage(pmap);
		map.put("page", pageBean);
		map.put("list", list);
		session.setAttribute("p", 1);
		map.put("glist", goodsService.getAll(null));
		map.put("ulist", userService.getAll(null));
		return "admin/record_list";
	}

	@RequestMapping("admin/recordList_search.do")
	public String recordList_search(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session, Record record) {
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
			int total = recordService.getCount(cmap);
			pmap.put("btype", "补货");
			cmap.put("btype", "补货");
			if (record.getGid() != null && !record.getGid().equals("")) {
				pmap.put("gid", record.getGid());
				cmap.put("gid", record.getGid());
			}
			pageBean.setTotal(total);
			List<Record> list = recordService.getByPage(pmap);
			map.put("page", pageBean);
			map.put("list", list);
			session.setAttribute("p", 1);
			map.put("adlist", typeService.getAll(null));
			map.put("ulist", userService.getAll(null));
			Map<String, Object> umap = new HashMap<String, Object>();
			umap.put("utype", "会员");
			map.put("ulist", userService.getAll(umap));
			map.put("glist", goodsService.getAll(null));
			return "admin/record_list";
		}
	}

	@RequestMapping("admin/deleteRecord.do")
	public String deleteRecord(int id) {
		recordService.delete(id);
		return "redirect:recordList.do";
	}

	
	/**
	 * ===药品报损记录管理====
	 * 
	 * @param map
	 * @return
	 */
	@RequestMapping("admin/doAddRecord_bs.do")
	public String doAddRecord_bs(ModelMap map, int id) {
		Goods goods = goodsService.getById(id);
		map.put("goods", goods);
		return "admin/record_add_bs";
	}

	@RequestMapping("admin/addRecord_bs.do")
	public String addRecord_bs(HttpServletRequest request, Record Record, HttpSession session) {
		System.out.println("ddddd");
		Sysuser u = (Sysuser) session.getAttribute("auser");
		System.out.println("u=-=" + u);
		if (u == null || u.equals("")) {
			return "admin/login";
		} else {
			java.sql.Timestamp time = new Timestamp(System.currentTimeMillis());
			Record.setStime(time.toString().substring(0, 19));
			Record.setBtype("报损");
			Goods goods = goodsService.getById(Record.getGid());
			goods.setKcnum(goods.getKcnum() - Record.getSnum());
			Record.setUid(u.getId());
			recordService.add(Record);
			goodsService.update(goods);
			return "admin/success";
		}
	}

	@RequestMapping("admin/doUpdateRecord_bs.do")
	public String doUpdateRecord_bs(ModelMap map, int id) {
		Record record  = recordService.getById(id);
		Goods goods = goodsService.getById(record.getGid());
		map.put("record", record);
		map.put("goods", goods);
		return "admin/record_update_bs";
	}

	@RequestMapping("admin/updateRecord_bs.do")
	public String updateRecord_bs(HttpServletRequest request, Record Record) {
		Record rec = recordService.getById(Record.getId());
		Goods goods = goodsService.getById(rec.getGid());
		goods.setKcnum(goods.getKcnum() + rec.getSnum() - Record.getSnum());
		recordService.update(Record);
		goodsService.update(goods);
		return "admin/success";
	}

	// 分页查询
	@RequestMapping("admin/recordList_bs.do")
	public String recordList_bs(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session) {
		if (page == null || page.equals("")) {
			page = "1";
		}
		PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
		Map<String, Object> pmap = new HashMap<String, Object>();
		pmap.put("pageno", pageBean.getStart());
		pmap.put("pageSize", pageBean.getPageSize());
		Map<String, Object> cmap = new HashMap<String, Object>();
		pmap.put("btype", "报损");
		cmap.put("btype", "报损");
		int total = recordService.getCount(cmap);
		pageBean.setTotal(total);
		List<Record> list = recordService.getByPage(pmap);
		map.put("page", pageBean);
		map.put("list", list);
		session.setAttribute("p", 1);
		map.put("glist", goodsService.getAll(null));
		map.put("ulist", userService.getAll(null));
		return "admin/record_list_bs";
	}

	@RequestMapping("admin/recordList_bs_search.do")
	public String recordList_bs_search(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session, Record record) {
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
			int total = recordService.getCount(cmap);
			pmap.put("btype", "报损");
			cmap.put("btype", "报损");
			if (record.getGid() != null && !record.getGid().equals("")) {
				pmap.put("gid", record.getGid());
				cmap.put("gid", record.getGid());
			}
			pageBean.setTotal(total);
			List<Record> list = recordService.getByPage(pmap);
			map.put("page", pageBean);
			map.put("list", list);
			session.setAttribute("p", 1);
			map.put("adlist", typeService.getAll(null));
			map.put("ulist", userService.getAll(null));
			Map<String, Object> umap = new HashMap<String, Object>();
			umap.put("utype", "会员");
			map.put("ulist", userService.getAll(umap));
			map.put("glist", goodsService.getAll(null));
			return "admin/record_list_bs";
		}
	}

	@RequestMapping("admin/deleteRecord_bs.do")
	public String deleteRecord_bs(int id) {
		recordService.delete(id);
		return "redirect:recordList_bs.do";
	}
	/**
	 * ===会员充值记录管理====
	 * 
	 * @param map
	 * @return
	 */
	@RequestMapping("admin/doAddRecord_cz.do")
	public String doAddRecord_cz(ModelMap map, int id) {
		Sysuser user = userService.getById(id);
		map.put("user", user);
		return "admin/record_add_cz";
	}

	@RequestMapping("admin/addRecord_cz.do")
	public String addRecord_cz(HttpServletRequest request, Record Record, HttpSession session) {
		System.out.println("ddddd");
		Sysuser u = (Sysuser) session.getAttribute("auser");
		System.out.println("u=-=" + u);
		if (u == null || u.equals("")) {
			return "admin/login";
		} else {
			java.sql.Timestamp time = new Timestamp(System.currentTimeMillis());
			Record.setStime(time.toString().substring(0, 19));
			Record.setBtype("充值");
			Sysuser user = userService.getById(Record.getGid());
			user.setMoney(user.getMoney() + Record.getPrice());
			Record.setUid(u.getId());
			recordService.add(Record);
			userService.update(user);
			return "admin/success";
		}
	}

	@RequestMapping("admin/doUpdateRecord_cz.do")
	public String doUpdateRecord_cz(ModelMap map, int id) {
		Record rec = recordService.getById(id);
		Sysuser user = userService.getById(rec.getGid());
		map.put("jz", rec);
		map.put("user", user);
		return "admin/record_update_cz";
	}

	@RequestMapping("admin/updateRecord_cz.do")
	public String updateRecord_cz(HttpServletRequest request, Record Record) {
		Record rec = recordService.getById(Record.getId());
		Sysuser user = userService.getById(rec.getGid());
		user.setMoney(user.getMoney() - rec.getPrice() + Record.getPrice());
		recordService.update(Record);
		userService.update(user);
		return "admin/success";
	}

	// 分页查询
	@RequestMapping("admin/recordList_cz.do")
	public String recordList_cz(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session) {
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
				pmap.put("uid", user.getId());
				cmap.put("uid", user.getId());
			}
			pmap.put("btype", "充值");
			cmap.put("btype", "充值");
			int total = recordService.getCount(cmap);
			pageBean.setTotal(total);
			List<Record> list = recordService.getByPage(pmap);
			map.put("page", pageBean);
			map.put("list", list);
			session.setAttribute("p", 1);
			Map<String, Object> umap = new HashMap<>();
			umap.put("utype", "会员");
			umap.put("gid", user.getId());
			map.put("glist", userService.getAll(umap));
			map.put("ulist", userService.getAll(null));
			return "admin/record_list_cz";
		}

	}

	@RequestMapping("admin/recordList_cz_search.do")
	public String recordList_cz_search(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session, Record record) {
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
			int total = recordService.getCount(cmap);
			if (user.getUtype().equals("销售员")) {
				pmap.put("uid", user.getId());
				cmap.put("uid", user.getId());
			}
			pmap.put("btype", "充值");
			cmap.put("btype", "充值");
			if (record.getGid() != null && !record.getGid().equals("")) {
				pmap.put("gid", record.getGid());
				cmap.put("gid", record.getGid());
			}
			pageBean.setTotal(total);
			List<Record> list = recordService.getByPage(pmap);
			map.put("page", pageBean);
			map.put("list", list);
			session.setAttribute("p", 1);
			map.put("adlist", typeService.getAll(null));
			map.put("ulist", userService.getAll(null));
			Map<String, Object> umap = new HashMap<String, Object>();
			umap.put("utype", "会员");
			umap.put("gid", user.getId());
			map.put("glist", userService.getAll(umap));
			map.put("ulist", userService.getAll(null));
			return "admin/record_list_cz";
		}
	}

	@RequestMapping("admin/deleteRecord_cz.do")
	public String deleteRecord_cz(int id) {
		recordService.delete(id);
		return "redirect:recordList_cz.do";
	}

	// 文件上传
	public String fileUpload(@RequestParam(value = "file", required = false) MultipartFile file,
			HttpServletRequest request, String img) {
		String path = request.getSession().getServletContext().getRealPath("upload");
		String fileName = file.getOriginalFilename();
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
			img = "zanwu.jpg";
		}
		return img;

	}
}

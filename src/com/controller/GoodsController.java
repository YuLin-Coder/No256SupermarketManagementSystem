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

import com.entity.Fshop;
import com.entity.Goods;
import com.entity.Sysuser;
import com.server.FtypeServer;
import com.server.GoodsServer;
import com.server.SysuserServier;
import com.server.ForderServer;
import com.server.FshopServer;
import com.util.Info;
import com.util.PageBean;

@Controller
public class GoodsController {
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

	
	// 分页查询
	@RequestMapping("admin/goods_tj.do")
	public String goods_tj(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session) {
		Sysuser u = (Sysuser) session.getAttribute("auser");
		if (u == null) {
			return "admin/login";
		} else {
			Timestamp time = new Timestamp(System.currentTimeMillis());
			List<Goods> glist = goodsService.getAll(null);
			int  day = 0;
			for (Goods g : glist) {
				day = Info.getBetweenDayNumber(g.getEtime(), time.toString().substring(0,19));
				if (day <= 0) {
					g.setStatus("还有"+-day+"天过期");
				} else if (day>0) {
					g.setStatus("已过期");
				} 
				goodsService.update(g);
			}

			if (page == null || page.equals("")) {
				page = "1";
			}
			PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
			Map<String, Object> pmap = new HashMap<String, Object>();
			pmap.put("pageno", pageBean.getStart());
			pmap.put("pageSize", pageBean.getPageSize());
			Map<String, Object> cmap = new HashMap<String, Object>();
			int total = goodsService.getCount(cmap);
			pageBean.setTotal(total);
			List<Goods> list = goodsService.getByPage2(pmap);
			map.put("page", pageBean);
			map.put("list", list);
			session.setAttribute("p", 1);
			map.put("adlist", typeService.getAll(null));
			map.put("ulist", userService.getAll(null));
			return "admin/goods_tj";
		}
	}
	@RequestMapping("admin/doAddGoods.do")
	public String doAddGoods(ModelMap map) {
		map.put("adlist", typeService.getAll(null));
		return "admin/goods_add";
	}


	@RequestMapping("admin/addGoods.do")
	public String addGoods(@RequestParam(value = "file", required = false) MultipartFile file,
			HttpServletRequest request, Goods Goods, String img, HttpSession session) {
		System.out.println("ddddd");
		Sysuser u = (Sysuser) session.getAttribute("auser");
		System.out.println("u=-=" + u);
		if (u == null || u.equals("")) {
			return "admin/login";
		} else {
			img = fileUpload(file, request, img);
			Goods.setImg(img);
			java.sql.Timestamp time = new Timestamp(System.currentTimeMillis());
			Goods.setPubtime(time.toString().substring(0, 19));
			Goods.setIsdel("1");
			Goods.setGno(Info.getID());
			Goods.setUid(u.getId() + "");
			Goods.setStatus("正常");
			Goods.setAddr("待补货");
			goodsService.add(Goods);
			return "admin/success";
		}
	}

	@RequestMapping("admin/doUpdateGoods.do")
	public String doUpdateGoods(ModelMap map, int id) {
		map.put("jz", goodsService.getById(id));
		map.put("adlist", typeService.getAll(null));
		return "admin/goods_update";
	}

	@RequestMapping("admin/updateGoods.do")
	public String updateGoods(@RequestParam(value = "file", required = false) MultipartFile file,
			HttpServletRequest request, Goods Goods, String img) {
		img = fileUpload(file, request, img);
		if (img != null && !img.equals("zanwu.jpg")) {
			Goods.setImg(img);
		}
		goodsService.update(Goods);
		return "admin/success";
	}

	// 分页查询
	@RequestMapping("admin/GoodsList.do")
	public String jianList(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session) {

		Sysuser u = (Sysuser) session.getAttribute("auser");
		if (u == null) {
			return "admin/login";
		} else {
			Timestamp time = new Timestamp(System.currentTimeMillis());
			List<Goods> glist = goodsService.getAll(null);
			int  day = 0;
			for (Goods g : glist) {
				day = Info.getBetweenDayNumber(g.getEtime(), time.toString().substring(0,19));
				if (day <= 0) {
					g.setStatus("还有"+-day+"天过期");
				} else if (day>0) {
					g.setStatus("已过期");
				} 
				
				goodsService.update(g);
			}
			for(Goods g:glist){
				if(g.getKcnum()==null||g.getKcnum()==0){
					g.setAddr("待补货");
				}else if(g.getKcnum()<=g.getMinnum()){
					g.setAddr("预警库存");
				}else{
					g.setAddr("库存充足");
				}
				goodsService.update(g);
			}
			if (page == null || page.equals("")) {
				page = "1";
			}
			PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
			Map<String, Object> pmap = new HashMap<String, Object>();
			pmap.put("pageno", pageBean.getStart());
			pmap.put("pageSize", pageBean.getPageSize());
			Map<String, Object> cmap = new HashMap<String, Object>();
			int total = goodsService.getCount(cmap);
			pageBean.setTotal(total);
			List<Goods> list = goodsService.getByPage(pmap);
			map.put("page", pageBean);
			map.put("list", list);
			session.setAttribute("p", 1);
			map.put("adlist", typeService.getAll(null));
			map.put("ulist", userService.getAll(null));
			return "admin/goods_list";
		}
	}

	// 购物车
	@RequestMapping("admin/addShop.do")
	public String addShop(Fshop fshop, HttpSession session) {
		Sysuser u = (Sysuser) session.getAttribute("auser");
		Timestamp time = new Timestamp(System.currentTimeMillis());
		if (u == null) {
			return "admin/login";
		} else {
			Map<String, Object> smap = new HashMap<>();
			smap.put("fid", fshop.getFid());
			smap.put("uid", u.getId());
			smap.put("status", "购物车");
			int count = shopService.getCount(smap);
			if (count > 0) {
				List<Fshop> flist = shopService.getAll(smap);
				Fshop shop = flist.get(0);
				shop.setNum(shop.getNum() + 1);
				shopService.update(shop);
			} else {
				fshop.setStatus("购物车");
				fshop.setPubtime(time.toString().substring(0, 19));
				fshop.setNum(1);
				fshop.setUid(u.getId());
				shopService.add(fshop);
			}
			return "redirect:GoodsList_shouYing.do";
		}

	}

	@RequestMapping("admin/deleteShop.do")
	public String deleteShop(int id) {
		shopService.delete(id);
		return "redirect:GoodsList_shouYing.do";
	}

	// 修改购物车的数量
	@RequestMapping("admin/updateShopNum.do")
	public String updateShopNum(HttpServletRequest request, Fshop shop) {
		shopService.update(shop);
		return "redirect:GoodsList_shouYing.do";
	}
	// 收营
	@RequestMapping("admin/GoodsList_shouYing.do")
	public String GoodsList_shouYing(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session) {
		Sysuser u = (Sysuser) session.getAttribute("auser");
		if (u == null) {
			return "admin/login";
		} else {
			Timestamp time = new Timestamp(System.currentTimeMillis());
			List<Goods> glist = goodsService.getAll(null);
			int  day = 0;
			for (Goods g : glist) {
				day = Info.getBetweenDayNumber(g.getEtime(), time.toString().substring(0,19));
				if (day <= 0) {
					g.setStatus("还有"+-day+"天过期");
				} else if (day>0) {
					g.setStatus("已过期");
				} 
				goodsService.update(g);
			}
			for(Goods g:glist){
				if(g.getKcnum()==null||g.getKcnum()==0){
					g.setAddr("待补货");
				}else if(g.getKcnum()<=g.getMinnum()){
					g.setAddr("预警库存");
				}else{
					g.setAddr("库存充足");
				}
				goodsService.update(g);
			}
			if (page == null || page.equals("")) {
				page = "1";
			}
			PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
			Map<String, Object> pmap = new HashMap<String, Object>();
			pmap.put("pageno", pageBean.getStart());
			pmap.put("pageSize", pageBean.getPageSize());
			Map<String, Object> cmap = new HashMap<String, Object>();
			int total = goodsService.getCount(cmap);
			pageBean.setTotal(total);
			List<Goods> list = goodsService.getByPage(pmap);
			map.put("page", pageBean);
			map.put("list", list);
			session.setAttribute("p", 1);
			map.put("adlist", typeService.getAll(null));
			map.put("ulist", userService.getAll(null));
			Map<String, Object> smap = new HashMap<String, Object>();
			Map<String, Object> umap = new HashMap<String, Object>();
			smap.put("uid", u.getId());
			smap.put("status", "购物车");
			umap.put("utype", "会员");
			umap.put("xid", u.getId());
			map.put("slist", shopService.getAll(smap));
			map.put("ulist", userService.getAll(umap));
			map.put("glist", goodsService.getAll(null));
			return "admin/goods_list_shouYin";
		}
	}

	// 分页模糊查询
	@RequestMapping("admin/vagueGoodsList_shouYing.do")
	public String vagueGoodsList_shouYing(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session, Goods cd) {
		Sysuser u = (Sysuser) session.getAttribute("auser");
		if (u == null) {
			return "admin/login";
		} else {
			List<Goods> glist = goodsService.getAll(null);
			for(Goods g:glist){
				if(g.getKcnum()==null||g.getKcnum()==0){
					g.setAddr("待补货");
				}else if(g.getKcnum()<=g.getMinnum()){
					g.setAddr("预警库存");
				}else{
					g.setAddr("库存充足");
				}
				goodsService.update(g);
			}
			if (page == null || page.equals("")) {
				page = "1";
			}
			PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
			Map<String, Object> pmap = new HashMap<String, Object>();
			pmap.put("pageno", pageBean.getStart());
			pmap.put("pageSize", pageBean.getPageSize());

			Map<String, Object> cmap = new HashMap<String, Object>();
			if (cd.getName() != null && !cd.getName().equals("")) {
				cmap.put("name", cd.getName());
				pmap.put("name", cd.getName());
			}
			if (cd.getGno() != null && !cd.getGno().equals("")) {
				cmap.put("gno", cd.getGno());
				pmap.put("gno", cd.getGno());
			}
			if (cd.getFid() != null && !cd.getFid().equals("")) {
				cmap.put("fid", cd.getFid());
				pmap.put("fid", cd.getFid());
			}

			int total = goodsService.getCount(cmap);
			pageBean.setTotal(total);
			List<Goods> list = goodsService.getByPage(pmap);
			map.put("page", pageBean);
			map.put("list", list);
			session.setAttribute("p", 2);
			map.put("adlist", typeService.getAll(null));
			Map<String, Object> smap = new HashMap<String, Object>();
			Map<String, Object> umap = new HashMap<String, Object>();
			smap.put("uid", u.getId());
			smap.put("status", "购物车");
			umap.put("utype", "会员");
			map.put("slist", shopService.getAll(smap));
			map.put("ulist", userService.getAll(umap));
			map.put("glist", goodsService.getAll(null));
			return "admin/goods_list_shouYin";
		}
	}

	@RequestMapping("admin/vagueGoodsList.do")
	public String vagueGoodsList(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session, Goods cd) {
		if (page == null || page.equals("")) {
			page = "1";
		}
		PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
		Map<String, Object> pmap = new HashMap<String, Object>();
		pmap.put("pageno", pageBean.getStart());
		pmap.put("pageSize", pageBean.getPageSize());

		Map<String, Object> cmap = new HashMap<String, Object>();
		if (cd.getName() != null && !cd.getName().equals("")) {
			cmap.put("name", cd.getName());
			pmap.put("name", cd.getName());
		}
		if (cd.getFid() != null && !cd.getFid().equals("")) {
			cmap.put("fid", cd.getFid());
			pmap.put("fid", cd.getFid());
		}
		int total = goodsService.getCount(cmap);
		pageBean.setTotal(total);
		List<Goods> list = goodsService.getByPage(pmap);
		map.put("page", pageBean);
		map.put("list", list);
		session.setAttribute("p", 2);
		map.put("adlist", typeService.getAll(null));
		return "admin/goods_list";
	}

	// 分页模糊查询
	@RequestMapping("showGoods.do")
	public String showGoods(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session, Goods cd) {
		if (page == null || page.equals("")) {
			page = "1";
		}
		PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
		Map<String, Object> pmap = new HashMap<String, Object>();
		pmap.put("pageno", pageBean.getStart());
		pmap.put("pageSize", pageBean.getPageSize());

		Map<String, Object> cmap = new HashMap<String, Object>();
		System.out.println("name===" + cd.getName());
		if (cd.getName() != null && !cd.getName().equals("")) {
			cmap.put("name", cd.getName());
			pmap.put("name", cd.getName());
		}
		if (cd.getFid() != null && !cd.getFid().equals("")) {
			cmap.put("fid", cd.getFid());
			pmap.put("fid", cd.getFid());
		}
		int total = goodsService.getCount(cmap);
		pageBean.setTotal(total);
		List<Goods> list = goodsService.getByPage(pmap);
		map.put("page", pageBean);
		map.put("list", list);
		session.setAttribute("p", 1);
		map.put("adlist", typeService.getAll(null));
		return "goods_List";
	}

	
	@RequestMapping("admin/deleteGoods.do")
	public String deleteGoods(int id) {
		goodsService.delete(id);
		return "redirect:GoodsList.do";
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

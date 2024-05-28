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
import com.entity.TongJi;
import com.entity.Forder;
import com.entity.Fshop;
import com.entity.Goods;
import com.server.ForderServer;
import com.server.FshopServer;
import com.server.GoodsServer;
import com.server.SysuserServier;
import com.util.Info;
import com.util.PageBean;

import net.sf.json.JSONObject;

@Controller
public class ForderController {
	@Resource
	private ForderServer orderService;
	@Resource
	private SysuserServier userService;
	@Resource
	private GoodsServer goodsService;
	@Resource
	private FshopServer shopService;

// 销售量统计
	@RequestMapping("admin/order_tj.do")
	public String order_tj(ModelMap map, HttpSession session) {
		List<TongJi> tjlist = orderService.getTongJi(null);
		map.put("list", tjlist);
		return "admin/order_tj";
	}
	
	@RequestMapping("admin/order_tj2.do")
	public String order_tj2(ModelMap map, HttpSession session) {
		List<TongJi> tjlist = orderService.getTongJi2(null);
		map.put("list", tjlist);
		return "admin/order_tj2";
	}
// 会员销量统计
	
		@RequestMapping("admin/order_tj_user.do")
		public String order_tj_user(@RequestParam(value = "page", required = false) String page, ModelMap map,
				HttpSession session, Forder yp) {
			Sysuser user = (Sysuser)session.getAttribute("auser");
			if(user==null){
				return "admin/login";
			}else{
				Map<String, Object> pmap = new HashMap<String, Object>();
				if(user.getUtype().equals("销售员")){
					pmap.put("xid", user.getId());
				}
				List<TongJi> list = orderService.getTongJi_user(pmap);
				map.put("list", list);
				session.setAttribute("p", 1);
				return "admin/order_list_tj";
			}
			
		}
	// 购买--收营
	@RequestMapping("admin/addOrder.do")
	public String addOrder(HttpServletRequest request, Forder order, HttpSession session) {
		Sysuser u = (Sysuser) session.getAttribute("auser");
		Timestamp time = new Timestamp(System.currentTimeMillis());
		if (u == null) {
			return "admin/login";
		} else {
			int hid = order.getUid();
			Sysuser user = userService.getById(hid);
			if (user.getMoney() < order.getZprice()) {
				session.setAttribute("info", "余额不足！请充值！");
				return "admin/error";
			} else {
				user.setMoney(user.getMoney() - order.getZprice());
				userService.update(user);
				System.out.println("hid==" + hid);
				String ono = Info.getID();
				System.out.println("订单号rr===" + ono);
				Map<String, Object> smap = new HashMap<String, Object>();
				smap.put("uid", u.getId());
				smap.put("status", "购物车");
				List<Fshop> slist = shopService.getAll(smap);
				for (Fshop fs : slist) {

					Fshop ff = shopService.getById(fs.getId());
					Goods gg = goodsService.getById(ff.getFid());
					if(gg.getKcnum()<ff.getNum()){
						session.setAttribute("info", "库存不足！");
						return "admin/error";
					}else{
						gg.setXnum(gg.getXnum() + ff.getNum());
						gg.setId(ff.getFid());
						gg.setKcnum(gg.getKcnum() - ff.getNum());
						goodsService.update(gg);
						ff.setStatus("已支付");
						ff.setId(fs.getId());
						ff.setOid(ono);
						shopService.update(ff);
						Forder fo = new Forder();
						fo.setIsdel("单个订单");
						fo.setOno(ono);
						fo.setPubtime(time.toString().substring(0, 10));
						fo.setStime(time.toString().substring(0, 19));
						fo.setUid(hid);
						fo.setXid(u.getId());
						fo.setStatus("已支付");
						fo.setFid(gg.getId());
						fo.setAmount(ff.getNum());
						fo.setZprice(gg.getPrice() * ff.getNum());
						fo.setLprice((gg.getPrice()-gg.getHprice())* ff.getNum());
						orderService.add(fo);
					}
					
				}

				return "admin/success";
			}

		}
	}

	// 订单详情查看showOrderDetail.do
	@RequestMapping("admin/showOrderDetail.do")
	public String showOrderDetail(int id, ModelMap map, HttpSession session) {
		Forder order = orderService.getById(id);
		Map<String, Object> gmap = new HashMap<String, Object>();
		gmap.put("oid", order.getOno());
		map.put("list", shopService.getAll(gmap));
		map.put("order", order);
		map.put("glist", goodsService.getAll(null));
		map.put("ulist", userService.getAll(null));
		return "admin/order_detail";
	}




	@RequestMapping("admin/updateForder.do")
	public String updateForder(@RequestParam(value = "file", required = false) MultipartFile file,
			HttpServletRequest request, Forder yp, String img) {

		img = fileUpload(file, request, img);
		/* yp.setImg(img); */
		orderService.update(yp);
		return "redirect:jianSList.do";
	}

	
	// 分页查询
	@RequestMapping("admin/ForderList.do")
	public String ForderList(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session, Forder yp) {
		Sysuser user = (Sysuser)session.getAttribute("auser");
		if(user==null){
			return "admin/login";
		}else{
			if (page == null || page.equals("")) {
				page = "1";
			}
			PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
			Map<String, Object> pmap = new HashMap<String, Object>();
			Map<String, Object> cmap = new HashMap<String, Object>();
			pmap.put("pageno", pageBean.getStart());
			pmap.put("pageSize", pageBean.getPageSize());
			if(user.getUtype().equals("销售员")){
				cmap.put("xid", user.getId());
				pmap.put("xid", user.getId());
			}
			int total = orderService.getCount(cmap);
			pageBean.setTotal(total);
			List<Forder> list = orderService.getByPage(pmap);
			List<Sysuser> ulist = userService.getAll(null);
			List<Goods> jzlist = goodsService.getAll(null);
			map.put("page", pageBean);
			map.put("list", list);
			map.put("ulist", ulist);
			map.put("flist", jzlist);
			session.setAttribute("p", 1);
			return "admin/order_list";
			
		}
		
	}

	




	@RequestMapping("admin/deleteForder.do")
	public String deleteForder(int id) {
		orderService.delete(id);
		return "redirect:ForderList.do";
	}

	

	// 统计分析
	@RequestMapping("admin/tj.do")
	public void selectTongji(ModelMap map, Fshop shop, HttpSession session, String starttime, String endtime,
			String xmlstr, HttpServletResponse response) {
		System.out.println("开始时间" + starttime);
		System.out.println("结束时间" + endtime);
		Map<String, Object> cmap = new HashMap<String, Object>();
		cmap.put("stime1", starttime);
		cmap.put("etime1", endtime);
		List<TongJi> tjlist = orderService.getTongJi(cmap);
		System.out.println("aaaaaaaaaaa==" + tjlist.size());
		xmlstr = "<graph showNames='1'  decimalPrecision='0'  > ";
		for (TongJi tj : tjlist) {

			xmlstr += "<set name='" + tj.getName() + "' value='" + tj.getAmount() + "'/> ";
		}
		xmlstr += "</graph>";
		System.out.println("xml==" + xmlstr);
		// System.out.println("ccccccccccccccccccc=="+olist.size());
		// 把集合转换为jsonarray
		// JSONArray array=JSONArray.fromObject(olist);
		JSONObject obj = new JSONObject();
		obj.put("xmlstr", xmlstr);
		// obj.put("list", array);
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

}

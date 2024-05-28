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
import com.entity.News;
import com.server.FtypeServer;
import com.server.GoodsServer;
import com.server.ForderServer;
import com.server.NewsServer;
import com.server.SysuserServier;
import com.util.PageBean;

@Controller
public class NewsController {
	@Resource
	private NewsServer newsService;
	@Resource
	private ForderServer ForderService;
	@Resource
	private SysuserServier userService;
	@Resource
	private GoodsServer jzService;
	@Resource
	private FtypeServer typeService;

	@RequestMapping("admin/lookNews.do")
	public String lookNews(ModelMap map, int id) {
		map.put("news", newsService.getById(id));
		return "admin/newsx";
	}

	@RequestMapping("admin/doAddNews.do")
	public String doAddNews(ModelMap map) {
		map.put("tlist", newsService.getAll(null));
		return "admin/news_add";
	}

	@RequestMapping("admin/addNews.do")
	public String addNews(@RequestParam(value = "file", required = false) MultipartFile file,
			HttpServletRequest request, News news, String img) {
		img = fileUpload(file, request, img);
		news.setImg(img);
		Timestamp time = new Timestamp(System.currentTimeMillis());
		news.setPubtime(time.toString().toString().substring(0, 19));
		news.setIsdel("1");
		newsService.add(news);
		return "redirect:newsList.do";
	}

	@RequestMapping("admin/doUpdateNews.do")
	public String doUpdateNews(ModelMap map, int id) {
		map.put("news", newsService.getById(id));
		return "admin/news_update";
	}

	@RequestMapping("admin/updateNews.do")
	public String updateNews(@RequestParam(value = "file", required = false) MultipartFile file,
			HttpServletRequest request, News news, String img) {
		img = fileUpload(file, request, img);
		news.setImg(img);
		newsService.update(news);
		return "redirect:newsList.do";
	}

	// 分页
	@RequestMapping("searchNews.do")
	public String searchNews(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session, News news) {
		if (page == null || page.equals("")) {
			page = "1";
		}
		PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
		Map<String, Object> pmap = new HashMap<String, Object>();
		Map<String, Object> nmap = new HashMap<String, Object>();
		pmap.put("pageno", pageBean.getStart());
		pmap.put("pageSize", pageBean.getPageSize());
		if (news.getName() != null && !news.getName().equals("")) {
			pmap.put("name", news.getName());
			nmap.put("name", news.getName());
		} else {
			pmap.put("name", null);
			nmap.put("name", null);
		}
		int total = newsService.getCount(nmap);
		System.out.println("total===" + total);
		pageBean.setTotal(total);
		List<News> list = newsService.getByPage(pmap);
		map.put("page", pageBean);
		map.put("list", list);
		session.setAttribute("p", 2);
		return "newsList";
	}

	@RequestMapping("fnewsList.do")
	public String newsList(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session) {
		if (page == null || page.equals("")) {
			page = "1";
		}
		PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
		Map<String, Object> pmap = new HashMap<String, Object>();
		pmap.put("pageno", pageBean.getStart());
		pmap.put("pageSize", pageBean.getPageSize());
		int total = newsService.getCount(null);
		System.out.println("total===" + total);
		pageBean.setTotal(total);
		List<News> list = newsService.getByPage(pmap);
		map.put("page", pageBean);
		map.put("list", list);
		session.setAttribute("p", 1);
		return "newsList";
	}

	// 分页查询
	@RequestMapping("admin/newsList.do")
	public String goodList(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session) {
		if (page == null || page.equals("")) {
			page = "1";
		}
		PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
		Map<String, Object> pmap = new HashMap<String, Object>();
		pmap.put("pageno", pageBean.getStart());
		pmap.put("pageSize", pageBean.getPageSize());
		int total = newsService.getCount(null);
		System.out.println("total===" + total);
		pageBean.setTotal(total);
		List<News> list = newsService.getByPage(pmap);
		map.put("page", pageBean);
		map.put("list", list);
		session.setAttribute("p", 1);
		return "admin/news_list";
	}

	// 分页模糊查询
	@RequestMapping("admin/vagueNewsList.do")
	public String vagueNewsList(@RequestParam(value = "page", required = false) String page, ModelMap map,
			HttpSession session) {
		if (page == null || page.equals("")) {
			page = "1";
		}
		PageBean pageBean = new PageBean(Integer.parseInt(page), PageBean.PAGESIZE);
		Map<String, Object> pmap = new HashMap<String, Object>();
		pmap.put("pageno", pageBean.getStart());
		pmap.put("pageSize", pageBean.getPageSize());
		int total = newsService.getCount(null);
		pageBean.setTotal(total);
		List<News> list = newsService.getByPage(pmap);
		map.put("page", pageBean);
		map.put("list", list);
		session.setAttribute("p", 2);
		return "admin/news_list";
	}

	@RequestMapping("admin/deleteNews.do")
	public String deleteNews(int id) {
		newsService.delete(id);
		return "redirect:newsList.do";
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

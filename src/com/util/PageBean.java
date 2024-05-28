package com.util;

/**
 * 分页Model类
 * 
 * @author
 *
 */
public class PageBean {
	/**
	 * 总记录数
	 */
	private int total;
	/**
	 * 总页数
	 */
	private int totalPage;
	private int page; // 第几页
	private int pageSize; // 每页记录数
	private int start; // 起始页
	public static final int PAGESIZE = 10;
	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getTotalPage() {

		return total % pageSize == 0 ? total / pageSize : (total / pageSize + 1);
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public PageBean(int page, int pageSize) {
		super();
		this.page = page;
		this.pageSize = pageSize;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getStart() {
		return (page - 1) * pageSize;
	}

}

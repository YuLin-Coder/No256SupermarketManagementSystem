package com.util;

import java.util.List;

//分页的工具类
public class PageInfo {
	public static final int PAGESIZE = 10;
	// 统计总条数
	private int count;
	// 当前页的数据集合
	private List pageList;
	// 当前页码
	private int pageIndex = 1;
	// 总的页数
	private int totalpages;

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public List getPageList() {
		return pageList;
	}

	public void setPageList(List pageList) {
		this.pageList = pageList;
	}

	public int getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}

	public void setTotalpages(int totalpages) {
		this.totalpages = totalpages;
	}

	// 计算总页数
	public int getTotalpages() {

		this.totalpages = this.count / this.PAGESIZE;
		if (this.count % this.PAGESIZE != 0) {

			this.totalpages++;
		}
		return this.totalpages;

	}

}

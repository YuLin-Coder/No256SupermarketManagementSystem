package com.server.impl;

import java.util.List;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.dao.GoodsMapper;
import com.entity.Goods;
import com.server.GoodsServer;
@Service
public class GoodsServerImpi implements GoodsServer {
   @Resource
   private GoodsMapper gdao;
	@Override
	public int add(Goods po) {
		return gdao.insert(po);
	}

	@Override
	public int update(Goods po) {
		return gdao.updateByPrimaryKeySelective(po);
	}

	@Override
	public int delete(int id) {
		return gdao.deleteByPrimaryKey(id);
	}

	@Override
	public List<Goods> getAll(Map<String, Object> map) {
		return gdao.getAll(map);
	}

	@Override
	public Goods checkUname(String account) {
		return null;
	}

	@Override
	public List<Goods> getByPage(Map<String, Object> map) {
		return gdao.getByPage(map);
	}

	@Override
	public int getCount(Map<String, Object> map) {
		return gdao.getCount(map);
	}

	@Override
	public List<Goods> select(Map<String, Object> map) {
		return gdao.select(map);
	}

	@Override
	public Goods getById(int id) {
		return gdao.selectByPrimaryKey(id);
	}

	@Override
	public List<Goods> getAll2(Map<String, Object> map) {
		return gdao.getAll2(map);
	}

	@Override
	public List<Goods> getByPage2(Map<String, Object> map) {
		return gdao.getByPage2(map);
	}

}

package com.server.impl;

import java.util.List;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.dao.FshopMapper;
import com.entity.Fshop;
import com.server.FshopServer;
@Service
public class FshopServerImpi implements FshopServer {
   @Resource
   private FshopMapper gdao;
	@Override
	public int add(Fshop po) {
		return gdao.insert(po);
	}

	@Override
	public int update(Fshop po) {
		return gdao.updateByPrimaryKeySelective(po);
	}

	@Override
	public int delete(int id) {
		return gdao.deleteByPrimaryKey(id);
	}

	@Override
	public List<Fshop> getAll(Map<String, Object> map) {
		return gdao.getAll(map);
	}

	@Override
	public Fshop checkUname(String account) {
		return null;
	}

	@Override
	public List<Fshop> getByPage(Map<String, Object> map) {
		return gdao.getByPage(map);
	}

	@Override
	public int getCount(Map<String, Object> map) {
		return gdao.getCount(map);
	}

	@Override
	public List<Fshop> select(Map<String, Object> map) {
		return gdao.select(map);
	}

	@Override
	public Fshop getById(int id) {
		return gdao.selectByPrimaryKey(id);
	}

}

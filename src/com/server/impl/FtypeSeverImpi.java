package com.server.impl;

import java.util.List;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.dao.FtypeMapper;
import com.entity.Ftype;
import com.server.FtypeServer;
@Service
public class FtypeSeverImpi implements FtypeServer {
     @Resource
     private FtypeMapper kdao;
     
	@Override
	public int add(Ftype po) {
		return kdao.insertSelective(po);
	}

	@Override
	public int update(Ftype po) {
		return kdao.updateByPrimaryKeySelective(po);
	}

	@Override
	public int delete(int id) {
		return kdao.deleteByPrimaryKey(id);
	}

	@Override
	public List<Ftype> getAll(Map<String, Object> map) {
		return kdao.getAll(map);
	}

	@Override
	public Ftype checkUname(Map<String, Object> account) {
		return kdao.checkUname(account);
	}

	@Override
	public List<Ftype> getByPage(Map<String, Object> map) {
		return kdao.getByPage(map);
	}

	@Override
	public int getCount(Map<String, Object> map) {
		return kdao.getCount(map);
	}

	@Override
	public List<Ftype> select(Map<String, Object> map) {
		return null;
	}

	@Override
	public Ftype getById(int id) {
		return kdao.selectByPrimaryKey(id);
	}



}

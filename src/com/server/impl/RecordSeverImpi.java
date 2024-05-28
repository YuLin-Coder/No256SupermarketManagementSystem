package com.server.impl;

import java.util.List;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.dao.RecordMapper;
import com.entity.Record;
import com.server.RecordServer;
@Service
public class RecordSeverImpi implements RecordServer {
     @Resource
     private RecordMapper kdao;
     
	@Override
	public int add(Record po) {
		return kdao.insertSelective(po);
	}

	@Override
	public int update(Record po) {
		return kdao.updateByPrimaryKeySelective(po);
	}

	@Override
	public int delete(int id) {
		return kdao.deleteByPrimaryKey(id);
	}

	@Override
	public List<Record> getAll(Map<String, Object> map) {
		return kdao.getAll(map);
	}

	@Override
	public Record checkUname(Map<String, Object> account) {
		return kdao.checkUname(account);
	}

	@Override
	public List<Record> getByPage(Map<String, Object> map) {
		return kdao.getByPage(map);
	}

	@Override
	public int getCount(Map<String, Object> map) {
		return kdao.getCount(map);
	}

	@Override
	public List<Record> select(Map<String, Object> map) {
		return null;
	}

	@Override
	public Record getById(int id) {
		return kdao.selectByPrimaryKey(id);
	}



}

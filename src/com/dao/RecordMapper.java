package com.dao;

import java.util.List;
import java.util.Map;

import com.entity.Record;

public interface RecordMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Record record);

    int insertSelective(Record record);

    Record selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Record record);

    int updateByPrimaryKey(Record record);
    
    public Record checkUname(Map<String, Object> uname);
//  查询所有信息
  public List<Record> getAll(Map<String, Object> map);
//  获取条数
  public int getCount(Map<String, Object> po); 
//  分页
  public List<Record> getByPage(Map<String, Object> map);
//  模糊查询并分页
  public List<Record> select(Map<String, Object> map);
}
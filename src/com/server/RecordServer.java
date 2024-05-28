package com.server;

import java.util.List;


import java.util.Map;
import com.entity.Record;

public interface RecordServer {
//  添加
  public int add(Record po);
//  修改
  public int update(Record po);
//  删除
  public int delete(int id);
//  查询
  public List<Record> getAll(Map<String, Object> map);
//  验证
  public Record checkUname(Map<String, Object> account);
//获取对象
   public Record getById( int id);
//  分页显示
  public List<Record> getByPage(Map<String, Object> map);
//  获取信息的条数
  public int getCount(Map<String, Object> map);
//  模糊查询
  public List<Record> select(Map<String, Object> map);
}

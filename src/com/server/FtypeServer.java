package com.server;

import java.util.List;


import java.util.Map;
import com.entity.Ftype;

public interface FtypeServer {
//  添加
  public int add(Ftype po);
//  修改
  public int update(Ftype po);
//  删除
  public int delete(int id);
//  查询
  public List<Ftype> getAll(Map<String, Object> map);
//  验证
  public Ftype checkUname(Map<String, Object> account);
//获取对象
   public Ftype getById( int id);
//  分页显示
  public List<Ftype> getByPage(Map<String, Object> map);
//  获取信息的条数
  public int getCount(Map<String, Object> map);
//  模糊查询
  public List<Ftype> select(Map<String, Object> map);
}

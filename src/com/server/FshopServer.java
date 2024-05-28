package com.server;

import java.util.List;

import java.util.Map;

import com.entity.Fshop;

public interface FshopServer {
//  添加
  public int add(Fshop po);
//  修改
  public int update(Fshop po);
//  删除
  public int delete(int id);
//  查询
  public List<Fshop> getAll(Map<String, Object> map);
//  验证
  public Fshop checkUname(String account);
//  获取对象
  public Fshop getById( int id);
//  分页显示
  public List<Fshop> getByPage(Map<String, Object> map);
//  获取信息的条数
  public int getCount(Map<String, Object> map);
//  模糊查询
  public List<Fshop> select(Map<String, Object> map);
}

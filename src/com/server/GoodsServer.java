package com.server;

import java.util.List;

import java.util.Map;

import com.entity.Goods;

public interface GoodsServer {
//  添加
  public int add(Goods po);
//  修改
  public int update(Goods po);
//  删除
  public int delete(int id);
//  查询
  public List<Goods> getAll(Map<String, Object> map);
//查询所有信息
  public List<Goods> getAll2(Map<String, Object> map);
//  验证
  public Goods checkUname(String account);
//  获取对象
  public Goods getById( int id);
//  分页显示
  public List<Goods> getByPage(Map<String, Object> map);
//分页
  public List<Goods> getByPage2(Map<String, Object> map);
//  获取信息的条数
  public int getCount(Map<String, Object> map);
//  模糊查询
  public List<Goods> select(Map<String, Object> map);
}

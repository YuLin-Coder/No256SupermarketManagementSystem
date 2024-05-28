package com.server;

import java.util.List;

import java.util.Map;

import com.entity.Forder;
import com.entity.TongJi;

public interface ForderServer {
//  添加
  public int add(Forder po);
//  修改
  public int update(Forder po);
//  删除
  public int delete(int id);
//  查询
  public List<Forder> getAll(Map<String, Object> map);
//  验证
  public Forder checkUname(String account);
//  获取对象
  public Forder getById( int id);
//  分页显示
  public List<Forder> getByPage(Map<String, Object> map);
//  获取信息的条数
  public int getCount(Map<String, Object> map);
//  模糊查询
  public List<Forder> select(Map<String, Object> map);
  
  public List<TongJi> getTongJi(Map<String, Object> map);
  
  public List<TongJi> getTongJi2(Map<String, Object> map);
  
  public List<TongJi> getTongJi_user(Map<String, Object> map);
  
}

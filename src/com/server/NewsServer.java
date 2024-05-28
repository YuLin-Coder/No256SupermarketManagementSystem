package com.server;

import java.util.List;


import java.util.Map;

import com.entity.News;

public interface NewsServer {
//  添加
  public int add(News po);
//  修改
  public int update(News po);
//  删除
  public int delete(int id);
//  查询
  public List<News> getAll(Map<String, Object> map);
//获取对象
  public News getById( int id);
//  验证
  public News checkUname(String account);
//  分页显示
  public List<News> getByPage(Map<String, Object> map);
//  获取信息的条数
  public int getCount(Map<String, Object> map);
//  模糊查询
  public List<News> select(Map<String, Object> map);
}

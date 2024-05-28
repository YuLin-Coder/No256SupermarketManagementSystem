package com.dao;

import java.util.List;
import java.util.Map;

import com.entity.Fshop;

public interface FshopMapper2 {
    int deleteByPrimaryKey(Integer id);

    int insert(Fshop record);

    int insertSelective(Fshop record);

    Fshop selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Fshop record);

    int updateByPrimaryKey(Fshop record);
    
    public Fshop checkUname(Map<String, Object> uname);
//  查询所有信息
  public List<Fshop> getAll(Map<String, Object> map);
//  获取条数
  public int getCount(Map<String, Object> po); 
//  分页
  public List<Fshop> getByPage(Map<String, Object> map);
//  模糊查询并分页
  public List<Fshop> select(Map<String, Object> map);
}
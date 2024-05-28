package com.dao;

import java.util.List;
import java.util.Map;

import com.entity.Ftype;

public interface FtypeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Ftype record);

    int insertSelective(Ftype record);

    Ftype selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Ftype record);

    int updateByPrimaryKey(Ftype record);
    
    
    public Ftype checkUname(Map<String, Object> uname);
//  查询所有信息
  public List<Ftype> getAll(Map<String, Object> map);
//  获取条数
  public int getCount(Map<String, Object> po); 
//  分页
  public List<Ftype> getByPage(Map<String, Object> map);
//  模糊查询并分页
  public List<Ftype> select(Map<String, Object> map);
}
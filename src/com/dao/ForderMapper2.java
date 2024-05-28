package com.dao;

import java.util.List;
import java.util.Map;

import com.entity.Forder;
import com.entity.TongJi;

public interface ForderMapper2 {
    int deleteByPrimaryKey(Integer kid);

    int insert(Forder record);

    int insertSelective(Forder record);

    Forder selectByPrimaryKey(Integer kid);

    int updateByPrimaryKeySelective(Forder record);

    int updateByPrimaryKey(Forder record);
    
    public Forder checkUname(Map<String, Object> uname);
//  查询所有信息
  public List<Forder> getAll(Map<String, Object> map);
//  获取条数
  public int getCount(Map<String, Object> po); 
//  分页
  public List<Forder> getByPage(Map<String, Object> map);
//  模糊查询并分页
  public List<Forder> select(Map<String, Object> map);
  
  public List<TongJi> getTongJi(Map<String, Object> map);
  
  public List<TongJi> getTongJi_user(Map<String, Object> map);
}
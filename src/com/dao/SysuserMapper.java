package com.dao;

import java.util.List;
import java.util.Map;

import com.entity.Sysuser;

public interface SysuserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Sysuser record);

    int insertSelective(Sysuser record);

    Sysuser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Sysuser record);

    int updateByPrimaryKey(Sysuser record);
    
    
    public Sysuser checkUname(Map<String, Object> uname);
    
  	//  验证后台登录
  	  public Sysuser adminLogin(Map<String, Object> po);
  	//  查询所有信息
  	  public List<Sysuser> getAll(Map<String, Object> map);
  	//  获取条数
  	  public int getCount(Map<String, Object> po); 
  	//  分页
  	  public List<Sysuser> getByPage(Map<String, Object> map);
  	//  模糊查询并分页
  	  public List<Sysuser> select(Map<String, Object> map);
}
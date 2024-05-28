package com.server;

import java.util.List;

import java.util.Map;

import com.entity.Sysuser;



public interface SysuserServier {
//  验证后台登录
  public Sysuser adminLogin(Map<String, Object> po);
//  添加用户
  public int add(Sysuser po);
//  获取单个用户信息
  public Sysuser getById(int id);
//  修改用户
  public int update(Sysuser po);
//  删除用户
  public int delete(int id);
//  查询用户
  public List<Sysuser> getAll(Map<String, Object> map);
//  验证用户名
  public Sysuser checkUname(Map<String, Object> account);
//  分页显示
  public List<Sysuser> getByPage(Map<String, Object> map);
//  获取信息的条数
  public int getCount(Map<String, Object> po);
//模糊查询并分页
public List<Sysuser> select(Map<String, Object> map);

}

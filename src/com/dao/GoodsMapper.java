package com.dao;

import java.util.List;
import java.util.Map;

import com.entity.Goods;

public interface GoodsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Goods record);

    int insertSelective(Goods record);

    Goods selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Goods record);

    int updateByPrimaryKeyWithBLOBs(Goods record);

    int updateByPrimaryKey(Goods record);
    
    public Goods checkUname(Map<String, Object> uname);
//  查询所有信息
    public List<Goods> getAll(Map<String, Object> map);
//查询所有信息
    public List<Goods> getAll2(Map<String, Object> map);
//  获取条数
    public int getCount(Map<String, Object> po); 
//  分页
    public List<Goods> getByPage(Map<String, Object> map);
//分页
    public List<Goods> getByPage2(Map<String, Object> map);
//  模糊查询并分页
    public List<Goods> select(Map<String, Object> map);
}
package com.server.impl;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.dao.SysuserMapper;
import com.entity.Sysuser;
import com.server.SysuserServier;
@Service
public class SysuserServiceImpi implements SysuserServier {
	@Resource
    private SysuserMapper userdao;
	@Override
	public Sysuser adminLogin(Map<String, Object> po) {
		return userdao.adminLogin(po);
	}
	@Override
	public int add(Sysuser po) {
		return userdao.insert(po);
	}
	@Override
	public int update(Sysuser po) {
		return userdao.updateByPrimaryKeySelective(po);
	}
	@Override
	public int delete(int id) {
		return userdao.deleteByPrimaryKey(id);
	}
	@Override
	public List<Sysuser> getAll(Map<String, Object> map) {
		return userdao.getAll(map);
	}
	@Override
	public Sysuser checkUname(Map<String, Object> account) {
		return userdao.checkUname(account);
	}
	@Override
	public List<Sysuser> getByPage(Map<String, Object> map) {
		return userdao.getByPage(map);
	}
	@Override
	public int getCount(Map<String, Object> po) {
		return userdao.getCount(po);
	}
	@Override
	public List<Sysuser> select(Map<String, Object> map) {
		return userdao.select(map);
	}
	@Override
	public Sysuser getById(int id) {
		return userdao.selectByPrimaryKey(id);
	}

}

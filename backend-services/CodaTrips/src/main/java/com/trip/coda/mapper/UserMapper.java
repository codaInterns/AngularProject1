package com.trip.coda.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectKey;

import com.trip.coda.models.AccountInput;
import com.trip.coda.models.User;

@Mapper
public interface UserMapper {
	
	@Select("select * from user")
	List<User> findAll();

	@Select("select * from user where userEmail=(#{userEmail}) and userPassword=(#{userPassword})")
	User login(AccountInput opt);

	@Insert("insert into user(userEmail,userPassword) values(#{userEmail},#{userPassword})")
	@SelectKey(statement="select  LAST_INSERT_ID() ", keyProperty="userId", before=false, resultType=int.class)
	void save(User user1);

	
}

package com.test5.test5.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test5.test5.models.UserDB;

public interface UserInterface extends JpaRepository<UserDB,Integer > {

}

package com.test5.test5;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInterface extends JpaRepository<UserDB,Integer > {

}

package com.example.Booking.Book.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Booking.Book.Model.UserPogo;

public interface UserRepo extends JpaRepository<UserPogo, Integer>{
	//public update

}

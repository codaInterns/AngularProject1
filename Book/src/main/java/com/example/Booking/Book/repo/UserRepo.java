package com.example.Booking.Book.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Booking.Book.Model.Userpogo;

public interface UserRepo extends JpaRepository<Userpogo, Integer>{
	//public update

}

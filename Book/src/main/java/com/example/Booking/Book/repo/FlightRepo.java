package com.example.Booking.Book.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Booking.Book.Model.FlightPogo;


public interface FlightRepo extends JpaRepository<FlightPogo, Integer> {
}



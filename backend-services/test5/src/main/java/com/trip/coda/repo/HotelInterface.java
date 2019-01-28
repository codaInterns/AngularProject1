package com.trip.coda.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test5.test5.models.hotels;
import com.trip.coda.models.Hotel;

public interface HotelInterface extends JpaRepository<Hotel, Integer>{
	
	

}

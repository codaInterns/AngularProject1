package com.trip.coda.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.trip.coda.models.Hotel;

public interface HotelRespository extends JpaRepository<Hotel, Integer>{
	
	

}

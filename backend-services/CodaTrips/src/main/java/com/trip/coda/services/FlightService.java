package com.trip.coda.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trip.coda.mapper.FlightMapper;
import com.trip.coda.models.Flight;
import com.trip.coda.models.FlightInput;
import com.trip.coda.repo.FlightRepo;


@Service
public class FlightService {
 
  @Autowired
  private FlightRepo repo;

  public List<Flight> getAllFlights(){

    System.out.println(repo.findAll());
    return repo.findAll();
  }
    
	public List<Flight> getFlights(FlightInput fi)
	{

		
		return repo.getFlights(fi.getSource(),fi.getDestination());
	}


}

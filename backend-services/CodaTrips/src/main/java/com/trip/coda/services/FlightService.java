package com.trip.coda.services;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trip.coda.mapper.FlightMapper;
import com.trip.coda.models.Flight;
import com.trip.coda.models.FlightInput;
import com.trip.coda.models.Hotel;

@Service
public class FlightService {
	@Autowired 
	private FlightMapper mapper;
	
 
	
	public List<Flight> getF(){
		 
		
		return mapper.findAll();
	}
    
	public List<Flight> getFlights(FlightInput fi)
	{

		Flight flight=new Flight();
		flight.setDeparture(fi.getDeparture());
		flight.setDestination(fi.getDestination());
		flight.setSource(fi.getSource());
		return mapper.getFlights(flight);
	}


}

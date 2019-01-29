package com.trip.coda.services;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;

import com.trip.coda.models.Flight;
import com.trip.coda.models.FlightInput;
import com.trip.coda.repo.FlightsInterface;

public class FlightService {
	@Autowired 
	private FlightsInterface repo;

	
	public List<Flight> getF(){
		 System.out.println("hello saja");
		return repo.findAll();
	}
    
	public List<Flight> getFlights(FlightInput fi)
	{
      System.out.println("hello saja1");
      List<Flight> flightList=repo.findAll();
      Iterator<Flight> flightIter=flightList.iterator();
      List<Flight> selectedList=new ArrayList<Flight>();
      while(flightIter.hasNext()) 
      {
	    Flight f1=flightIter.next();
	    if(f1.getDestination().equals(fi.getDestination())&&f1.getSource().equals(fi.getSource())) {
		   selectedList.add(f1);
	  } 
	
      }
    
     return selectedList;
	
	}


}

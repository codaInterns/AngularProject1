package com.test5.test5;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api")
public class FlightsController {

@Autowired 
private FlightsInterface repo;

@GetMapping("/getFlights")
public List<flights> getAllFlights(){
	return repo.findAll();
}

@GetMapping("/getFlight/{source}/{destination}/{date}")
public List<flights> getFlights(@PathVariable(name="source")String source,@PathVariable(name="destination")String destination,@PathVariable(name="date")String date)
		{
	
	List<flights> flightList=repo.findAll();
	Iterator<flights> flightIter=flightList.iterator();
	List<flights> selectedList=new ArrayList<flights>();
	while(flightIter.hasNext()) {
		flights f1=flightIter.next();
		if(f1.getDestination().equals(destination)&&f1.getSource().equals(source)) {
			selectedList.add(f1);
		}
		
	}
	
	return selectedList;
		
		}
	



}

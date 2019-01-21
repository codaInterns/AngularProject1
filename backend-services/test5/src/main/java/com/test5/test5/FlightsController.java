package com.test5.test5;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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


}

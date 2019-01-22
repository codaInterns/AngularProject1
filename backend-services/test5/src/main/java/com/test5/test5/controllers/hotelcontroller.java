package com.test5.test5.controllers;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test5.test5.models.HotelInput;
import com.test5.test5.models.hotels;
import com.test5.test5.repo.hotelrespository;

@RestController
@RequestMapping("/api")
	
public class hotelcontroller {


	@Autowired 
	private hotelrespository repo;
	
	
// retrival of all hotels
	@GetMapping("/gethotels")
	public List<hotels> getAllHotels(){
		return repo.findAll();
	}
	

//retrival of location based hotel
	@PostMapping(path="/getHotel/" ,consumes = "application/json" , produces = "application/json")
	public List<hotels> getHotels(@RequestBody HotelInput hi)
			{
		
		List<hotels> hotelList=repo.findAll();
		Iterator<hotels> hotelIter=hotelList.iterator();
		List<hotels> selectedList=new ArrayList<hotels>();
		while(hotelIter.hasNext()) {
			hotels f1=hotelIter.next();
			if(f1.getHotel_place().equals(hi.getHotel_place())){
				selectedList.add(f1);
			}
			
		}
		
		  return selectedList;
			
			}

//hotel insertion in to database
	@PostMapping(path="/addhotel/" ,consumes = "application/json" , produces = "application/json")
	public String addhotel(@RequestBody HotelInput hi)
	{
		
		hotels hotel = new hotels();
		hotel.setHotel_name(hi.getHotel_name());
		hotel.setHotel_place(hi.getHotel_place());
		hotel.setPrice(hi.getPrice());
		hotel.setHotel_description(hi.getHotel_description());
		hotel.setHotel_image(hi.getHotel_image());
		repo.save(hotel);
		
		return null;
		
	}
	

	/*
	@GetMapping("/getf")
	public List getAll(){
	
		HotelInput hi = new HotelInput();
		hi.setHotel_place("chennai");
		List<hotels> hotelList=repo.findAll();
		Iterator<hotels> hotelIter=hotelList.iterator();
		List<hotels> selectedList=new ArrayList<hotels>();
		while(hotelIter.hasNext()) {
			hotels f1=hotelIter.next();
			if(f1.getHotel_place().equals(hi.getHotel_place())){
				selectedList.add(f1);
			}
			
		}
		
		  return selectedList;
	
	}
*/


	}




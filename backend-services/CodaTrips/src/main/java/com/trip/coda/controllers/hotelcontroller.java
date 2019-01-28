package com.trip.coda.controllerss
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test5.test5.models.hotels;
import com.trip.coda.models.Hotel;
import com.trip.coda.models.HotelInput;
import com.trip.coda.repo.HotelRespository;



@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
	
public class hotelcontroller {


	@Autowired 
	private HotelRespository repo;
	
	
// retrival of all hotels
	@GetMapping("/gethotels")
	public List<Hotel> getAllHotels(){
		return repo.findAll();
	}
	

//retrival of location based hotel
	@PostMapping(path="/getHotel/" ,consumes = "application/json" , produces = "application/json")
	public List<Hotel> getHotels(@RequestBody HotelInput hi)
			{
		// System.out.println("hii");
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
	public boolean addhotel(@RequestBody HotelInput hi)
	{
		try {
		//System.out.println("hekllcvbhccccccccccccccccccccccj");
		hotels hotel = new hotels();
		System.out.println(hi.getHotel_name());
		hotel.setHotel_name(hi.getHotel_name());
		hotel.setHotel_place(hi.getHotel_place());
		hotel.setPrice(hi.getPrice());
		hotel.setHotel_description(hi.getHotel_description());
		hotel.setHotel_image(hi.getHotel_image());
		/*
		hotel.setHotel_name("ddh");
		hotel.setHotel_place("dhdh");
		hotel.setPrice(12345);
		hotel.setHotel_description("dhdhh");
		hotel.setHotel_image("dddjdj");
		*/
		repo.save(hotel);
		
		return true;
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return false;
		}
		
		
	}
	

	
	@GetMapping("/getf")
	public boolean getAll(){
	/*
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
		  
		  */
		System.out.println("hekllcvbhccccccccccccccccccccccj");
		hotels hotel = new hotels();
		hotel.setHotel_name("castle rock");
		hotel.setHotel_place("bangalore");
		hotel.setPrice(12345);
		hotel.setHotel_description("nice one");
		hotel.setHotel_image("dddjdj");
		repo.save(hotel);
		return true;
	
	}



	}




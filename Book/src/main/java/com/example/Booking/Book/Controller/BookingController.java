package com.example.Booking.Book.Controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Booking.Book.Model.FlightPogo;
import com.example.Booking.Book.Model.Flight_detail_capacity;
import com.example.Booking.Book.Model.Userpogo;
import com.example.Booking.Book.repo.FlightRepo;


@RestController
@RequestMapping("/book")
public class BookingController {
	@Autowired
	private FlightRepo book_repo;
	
	
	@PostMapping(path="/getAll",consumes="application/json",produces="application/json")
	public List<FlightPogo> getFlight()
	{
		List<FlightPogo> all_Flight=book_repo.findAll();
		return all_Flight;	
	}
	
	@PostMapping(path="/getDetail",consumes="application/json",produces="application/json")
	public List<Flight_detail_capacity> getCapacity()
	{
		List<FlightPogo> all_flight=book_repo.findAll();
		Iterator<FlightPogo> itr=all_flight.iterator();
		List<Flight_detail_capacity> cap=new ArrayList<>();

		Flight_detail_capacity fc=new Flight_detail_capacity();
		while(itr.hasNext())
		{
			FlightPogo fp=itr.next();
			fc.setName(fp.getFlight_name());
			fc.setDesc(fp.getFlight_desc());
			fc.setAvail_cap(fp.getAvail_capacity());
			cap.add(fc);
		}
		return cap;
		
	}
	
	
	@PostMapping(path="/booking",consumes="application/json",produces="application/json")
	public String booking(@RequestBody Userpogo bform)
	{
		
		return "";
	}
	
	
	
	
}

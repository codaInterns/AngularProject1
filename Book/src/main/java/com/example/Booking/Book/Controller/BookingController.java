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
import com.example.Booking.Book.Model.status;
import com.example.Booking.Book.repo.FlightRepo;
import com.example.Booking.Book.repo.UserRepo;


@RestController
@RequestMapping("/book")
public class BookingController {
	@Autowired
	private FlightRepo book_repo;
	@Autowired
	private UserRepo book_user;
	
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

		
		while(itr.hasNext())
		{
			Flight_detail_capacity fc=new Flight_detail_capacity();
			FlightPogo fp=itr.next();
			fc.setName(fp.getFlight_name());
			fc.setDesc(fp.getFlight_desc());
			fc.setAvail_cap(fp.getAvail_capacity());
			cap.add(fc);
		}
		return cap;
	}
	
	@PostMapping(path="/booking",produces="application/json",consumes="application/json")
	public status booking(@RequestBody Userpogo bform)
	{
		List<FlightPogo> all_flight=book_repo.findAll();
		Iterator<FlightPogo> itr=all_flight.iterator();
		int fid=bform.getFlight_id();
		int seats=bform.getSeats_booked();
		status s=new status();
		Userpogo up=new Userpogo();
		int f=0;
		while(itr.hasNext())
		{

			FlightPogo fp=itr.next();
			if(fp.getFid()==fid )
				{
				f=1;
				if((fp.getAvail_capacity()-seats)>0)
				System.out.println(bform.getFlight_id()+'\n'+bform.getName()+"\n"+bform.getSeats_booked());
				up.setFlight_id(fid);				
				FlightPogo ff=book_repo.getOne(fid);
				ff.setAvail_capacity(fp.getTotal_capacity()-seats);
				up.setName(bform.getName());
				up.setSeats_booked(seats);
				up.setFlight_name(fp.getFlight_name());
				System.out.println(up);
				book_user.save(up);
				book_repo.save(ff);
				s.setMessage("Your ticket have been booked successfully");
				break;
			}
				}
		if(f!=1)
		{
			s.setMessage("Error while booking");
			
		}
		
		return s;
	}	
}
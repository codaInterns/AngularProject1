package com.example.Booking.Book.Controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.TypeMismatchException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException.BadRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.Booking.Book.Exception.CustomizedException;
import com.example.Booking.Book.Model.FlightPogo;
import com.example.Booking.Book.Model.FlightDetailCapacity;
import com.example.Booking.Book.Model.UserBooked;
import com.example.Booking.Book.Model.UserPogo;
import com.example.Booking.Book.Model.Status;
import com.example.Booking.Book.repo.FlightRepo;
import com.example.Booking.Book.repo.UserRepo;
import com.fasterxml.jackson.databind.exc.InvalidFormatException;

@ControllerAdvice
@RestController
@RequestMapping("/book")
public class BookingController
{
	@Autowired
	private FlightRepo book_Repo;
	@Autowired
	private UserRepo book_user;
	
	@PostMapping(path="/getAll",consumes="application/json",produces="application/json")
	public List<FlightPogo> getFlight()
	{
		List<FlightPogo> all_Flight=book_Repo.findAll();
		return all_Flight;	
	}
	
	@PostMapping(path="/getDetail",consumes="application/json",produces="application/json")
	public List<FlightDetailCapacity> getCapacity()
	{
		List<FlightPogo> all_Flight=book_Repo.findAll();
		Iterator<FlightPogo> itr=all_Flight.iterator();
		List<FlightDetailCapacity> cap=new ArrayList<>();

		
		while(itr.hasNext())
		{
			FlightDetailCapacity fc=new FlightDetailCapacity();
			FlightPogo fp=itr.next();
			fc.setName(fp.getFlight_name());
			fc.setDesc(fp.getFlight_desc());
			fc.setAvail_cap(fp.getAvail_capacity());
			cap.add(fc);
		}
		return cap;
	}
	
	@PostMapping(path="/bookingc",produces="application/json",consumes="application/json")
	public UserBooked bookingcheck(@RequestBody(required=false) UserBooked bform,BindingResult bs) 
	{
		int fid=Integer.parseInt(bform.getFname());
		
		return bform;
		
	}
	
	@PostMapping(path="/booking",produces="application/json",consumes="application/json")
	public Status booking(@Valid @RequestBody(required=false) UserBooked bform,BindingResult bs) 
	{
		Status s=new Status();
		
//		try {
		if(bform==null) {
			System.out.println("hello");
		throw new CustomizedException(404,"NOT_FOUND");
		}
			//throw new RuntimeException(HttpStatus.NOT_FOUND.toString());
		if(bs.hasErrors()) {
			System.out.println("hii");
			throw new CustomizedException(400, "Bad request");
		}
		List<FlightPogo> all_Flight=book_Repo.findAll();
		Iterator<FlightPogo> itr=all_Flight.iterator();
	 	System.out.println(bform.getFname());
		int fid;
		try {
		 fid=Integer.parseInt(bform.getFname());
			System.out.println(fid);
		}catch(Exception e)
		{
			throw new CustomizedException(415,"Mismatched type");
		}
		int seats=bform.getSeats_booked();
	
		UserPogo up=new UserPogo();
		int f=0;
		FlightPogo ff=book_Repo.getOne(fid);;
		
		try {
		ff=book_Repo.getOne(fid);
		System.out.println(ff);
		}catch(Exception e) {
			throw new CustomizedException(400,"Bad request");
			//throw new RuntimeException(HttpStatus.BAD_REQUEST.toString());
		}
		while(itr.hasNext())
		{
			FlightPogo fp=itr.next();
			if(fp.getFid()==fid )
				{
				if((fp.getAvail_capacity()-seats)>0){
					f=1;
				System.out.println(bform.getFname()+'\n'+"\n"+bform.getSeats_booked());
				up.setFlight_id(bform.getFname());			

				ff.setAvail_capacity(fp.getAvail_capacity()-seats);
				up.setName(bform.getUname());
				up.setSeats_booked(seats);
				up.setFlight_name(fp.getFlight_name());
				System.out.println(up);
				book_user.save(up);
				book_Repo.save(ff);
				s.setMessage("Your ticket have been booked successfully");
				break;
			}
				}
		}
		if(f!=1)
		{
			s.setMessage("The number of seats you booked is not sufficient ");	 
		}
//		}catch(Exception e)
//		{
//			//e.printStackTrace();
//			System.out.println("hiii");
//			throw new HttpMessageNotReadableException(e.toString());
//		}
		return s;
	}	
	
	@PostMapping(path="/bookedusers",consumes="application/json",produces="application/json")
	public List<UserBooked> getdetails_bookedUser()
	{
		List<UserPogo> all_user=book_user.findAll();
		Iterator<UserPogo> it=all_user.iterator();
		List<UserBooked> user_list=new ArrayList<>();
		while(it.hasNext())
		{
			UserBooked ub=new UserBooked();
			UserPogo up=it.next();
			ub.setFname(up.getFlight_name());
			ub.setUname(up.getName());
			ub.setSeats_booked(up.getSeats_booked());
			user_list.add(ub);
		}
		return user_list;
	}
}
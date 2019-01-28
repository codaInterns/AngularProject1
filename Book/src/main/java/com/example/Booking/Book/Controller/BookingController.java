package com.example.Booking.Book.Controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.example.Booking.Book.Exception.CustomizedExcp;
import com.example.Booking.Book.Model.FlightPogo;
import com.example.Booking.Book.Model.Flight_detail_capacity;
import com.example.Booking.Book.Model.UserBooked;
import com.example.Booking.Book.Model.Userpogo;
import com.example.Booking.Book.Model.status;
import com.example.Booking.Book.repo.FlightRepo;
import com.example.Booking.Book.repo.UserRepo;

@ControllerAdvice
@RestController
@RequestMapping("/book")
public class BookingController extends ResponseEntityExceptionHandler
{
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
	public status booking(@Valid @RequestBody(required=false) Userpogo bform,BindingResult bs) throws BadRequest
	{
		if(bform==null)
		throw new CustomizedExcp(404,"NOT_FOUND");
			//throw new RuntimeException(HttpStatus.NOT_FOUND.toString());
		if(bs.hasErrors()) {
			System.out.println("hii");
			throw new CustomizedExcp(400, "Bad request");
		}
		List<FlightPogo> all_flight=book_repo.findAll();
		Iterator<FlightPogo> itr=all_flight.iterator();
	 	System.out.println(bform.getFlight_id());
		int fid;
		try {
		 fid=bform.getFlight_id();
			System.out.println(fid);
		}catch(Exception e)
		{
			throw new CustomizedExcp(415,"Mismatched type");
		}
		int seats=bform.getSeats_booked();
	
		status s=new status();
		Userpogo up=new Userpogo();
		int f=0;
		FlightPogo ff=book_repo.getOne(fid);;
		
		try {
		ff=book_repo.getOne(fid);
		System.out.println(ff);
		}catch(Exception e) {
			throw new CustomizedExcp(400,"Bad request");
			//throw new RuntimeException(HttpStatus.BAD_REQUEST.toString());
		}
		while(itr.hasNext())
		{
			FlightPogo fp=itr.next();
			if(fp.getFid()==fid )
				{
				if((fp.getAvail_capacity()-seats)>0){
					f=1;
				System.out.println(bform.getFlight_id()+'\n'+bform.getName()+"\n"+bform.getSeats_booked());
				up.setFlight_id(fid);				

				ff.setAvail_capacity(fp.getAvail_capacity()-seats);
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
		}
		if(f!=1)
		{
			s.setMessage("The number of seats you booked is not sufficient ");	 
		}
		return s;
	}	
	
	@PostMapping(path="/bookedusers",consumes="application/json",produces="application/json")
	public List<UserBooked> getdetails_bookedUser()
	{
		List<Userpogo> all_user=book_user.findAll();
		Iterator<Userpogo> it=all_user.iterator();
		List<UserBooked> user_list=new ArrayList<>();
		while(it.hasNext())
		{
			UserBooked ub=new UserBooked();
			Userpogo up=it.next();
			ub.setFname(up.getFlight_name());
			ub.setUname(up.getName());
			ub.setSeats_booked(up.getSeats_booked());
			user_list.add(ub);
		}
		return user_list;
	}
}
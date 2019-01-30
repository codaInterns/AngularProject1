package com.trip.coda.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trip.coda.mapper.HotelMapper;
import com.trip.coda.models.Flight;
import com.trip.coda.models.Hotel;
import com.trip.coda.models.HotelInput;



@Service
public class HotelService {
	
	@Autowired 
	private HotelMapper mapper;
	
	public List<Hotel> getAllHotels(){
		return mapper.findAll();
		
	}
    
	public List<Hotel> getHotels(HotelInput hi)
	{
		Hotel hotel=new Hotel();
		hotel.setHotelDescription(hi.getHotelDescription());
		hotel.setHotelImage(hi.getHotelImage());
		hotel.setHotelName(hi.getHotelName());
		hotel.setHotelPlace(hi.getHotelPlace());
		hotel.setHotelPrice(hi.getHotelPrice());
		
		return mapper.findHotelByLocation(hotel);
	
	}
	
	public boolean addhotel(HotelInput hi)
	{
		Hotel hotel=new Hotel();
		hotel.setHotelDescription(hi.getHotelDescription());
		hotel.setHotelImage(hi.getHotelImage());
		hotel.setHotelName(hi.getHotelName());
		hotel.setHotelPlace(hi.getHotelPlace());
		hotel.setHotelPrice(hi.getHotelPrice());
		try {
			
		mapper.save(hotel);
		return true;
		}
		catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}
	
	
}

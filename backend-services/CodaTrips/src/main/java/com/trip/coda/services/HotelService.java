package com.trip.coda.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;

import com.trip.coda.models.Hotel;
import com.trip.coda.repo.HotelInterface;



public class HotelService {
	
	@Autowired 
	private HotelInterface repo;
	
	public List<Hotel> getAllHotels(){
		return repo.findAll();
	}
    
	public List<Hotel> getHotels(String location)
	{
 
        List<hotels> hotelList=repo.findAll();
        Iterator<hotels> hotelIter=hotelList.iterator();
        List<hotels> selectedList=new ArrayList<hotels>();
        while(hotelIter.hasNext())
        {
	      hotels f1=hotelIter.next();
	      if(f1.getHotel_place().equals(location))
	      {
		  selectedList.add(f1);
	      }
	   }
       return selectedList;
	
	}
	
	public boolean addhotel(HotelInput hi)
	{
		try {
		hotels hotel = new hotels();
		System.out.println(hi.getHotel_name());
		hotel.setHotel_name(hi.getHotel_name());
		hotel.setHotel_place(hi.getHotel_place());
		hotel.setPrice(hi.getPrice());
		hotel.setHotel_description(hi.getHotel_description());
		hotel.setHotel_image(hi.getHotel_image());
		repo.save(hotel);
		
		return true;
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return false;
		}
		
		
	}
	
	
}

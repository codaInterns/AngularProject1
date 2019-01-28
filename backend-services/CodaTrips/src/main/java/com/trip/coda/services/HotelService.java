package com.trip.coda.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;

import com.trip.coda.models.Hotel;
import com.trip.coda.models.HotelInput;
import com.trip.coda.repo.HotelInterface;



public class HotelService {
	
	@Autowired 
	private HotelInterface repo;
	
	public List<Hotel> getAllHotels(){
		return repo.findAll();
	}
    
	public List<Hotel> getHotels(String location)
	{
 
        List<Hotel> hotelList=repo.findAll();
        Iterator<Hotel> hotelIter=hotelList.iterator();
        List<Hotel> selectedList=new ArrayList<Hotel>();
        while(hotelIter.hasNext())
        {
	      Hotel f1=hotelIter.next();
	      if(f1.getHotelPlace().equals(location))
	      {
		  selectedList.add(f1);
	      }
	   }
       return selectedList;
	
	}
	
	public boolean addhotel(HotelInput hi)
	{
		try {
		Hotel hotel = new Hotel();
		
		hotel.setHotelName(hi.getHotelName());
		hotel.setHotelPlace(hi.getHotelPlace());
		hotel.setHotelPrice(hi.getHotelPrice());
		hotel.setHotelDescription(hi.getHotelDescription());
		hotel.setHotelImage(hi.getHotelImage());
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

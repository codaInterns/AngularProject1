package com.trip.coda.models;

import javax.persistence.Column;

public class HotelInput {
	
	private String hotelName;
	private String hotelPlace;
	private long hotelPrice;
	private String hotelDescription;
	private String hotelImage;
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	public String getHotelPlace() {
		return hotelPlace;
	}
	public void setHotelPlace(String hotelPlace) {
		this.hotelPlace = hotelPlace;
	}
	public long getHotelPrice() {
		return hotelPrice;
	}
	public void setHotelPrice(long hotelPrice) {
		this.hotelPrice = hotelPrice;
	}
	public String getHotelDescription() {
		return hotelDescription;
	}
	public void setHotelDescription(String hotelDescription) {
		this.hotelDescription = hotelDescription;
	}
	public String getHotelImage() {
		return hotelImage;
	}
	public void setHotelImage(String hotelImage) {
		this.hotelImage = hotelImage;
	}
	
	
	

}

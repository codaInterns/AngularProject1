package com.trip.coda.models;

import javax.persistence.Column;

public class HotelInput {
	
	private String hotelName;
	private String hotelPlace;
	private long hotelPrice;
	private String hotelDescription;
	private String hotelImage;
	public String gethotelname() {
		return hotelName;
	}
	public void sethotelname(String hotelName) {
		this.hotelName = hotelName;
	}
	public String gethotelplace() {
		return hotelPlace;
	}
	public void sethotelplace(String hotelPlace) {
		this.hotelPlace = hotelPlace;
	}
	public long getPrice() {
		return hotelPrice;
	}
	public void setPrice(long hotelPrice) {
		this.hotelPrice = hotelPrice;
	}
	public String gethoteldescription() {
		return hotelDescription;
	}
	public void sethoteldescription(String hoteldescription) {
		this.hotelDescription = hoteldescription;
	}
	public String gethotelimage() {
		return hotelImage;
	}
	public void sethotelimage(String hotelimage) {
		this.hotelImage = hotelimage;
	}
	
	
	

}

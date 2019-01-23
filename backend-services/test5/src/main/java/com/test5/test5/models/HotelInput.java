package com.test5.test5;

import javax.persistence.Column;

public class HotelInput {
	
	private String hotel_name;
	private String hotel_place;
	private long price;
	private String hotel_description;
	private String hotel_image;
	public String getHotel_name() {
		return hotel_name;
	}
	public void setHotel_name(String hotel_name) {
		this.hotel_name = hotel_name;
	}
	public String getHotel_place() {
		return hotel_place;
	}
	public void setHotel_place(String hotel_place) {
		this.hotel_place = hotel_place;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}
	public String getHotel_description() {
		return hotel_description;
	}
	public void setHotel_description(String hotel_description) {
		this.hotel_description = hotel_description;
	}
	public String getHotel_image() {
		return hotel_image;
	}
	public void setHotel_image(String hotel_image) {
		this.hotel_image = hotel_image;
	}
	
	
	

}

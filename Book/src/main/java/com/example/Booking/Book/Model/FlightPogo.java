package com.example.Booking.Book.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Book_Flight")
public class FlightPogo {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer fid;
	
	@Column(name="Flight_name")
	private String Flight_name;
	
	@Column(name="Flight_desc")
	private String Flight_desc;
	
	@Column(name="Total_capacity")
	private long Total_capacity;
	
	@Column(name="Avail_capacity")
	private long Avail_capacity;

	public Integer getFid() {
		return fid;
	}

	public void setFid(Integer fid) {
		this.fid = fid;
	}

	public String getFlight_name() {
		return Flight_name;
	}

	public void setFlight_name(String flight_name) {
		Flight_name = flight_name;
	}

	public String getFlight_desc() {
		return Flight_desc;
	}

	public void setFlight_desc(String flight_desc) {
		Flight_desc = flight_desc;
	}

	public long getTotal_capacity() {
		return Total_capacity;
	}

	public void setTotal_capacity(long total_capacity) {
		Total_capacity = total_capacity;
	}

	public long getAvail_capacity() {
		return Avail_capacity;
	}

	public void setAvail_capacity(long avail_capacity) {
		Avail_capacity = avail_capacity;
	}
	

}

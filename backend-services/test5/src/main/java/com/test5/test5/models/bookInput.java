package com.test5.test5.models;

public class bookInput {
	private int flights_id;
	private String name,source,destination,departure;
	
	public int getFlights_id() {
		return flights_id;
	}
	public void setFlights_id(int flights_id) {
		this.flights_id = flights_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getDeparture() {
		return departure;
	}
	public void setDeparture(String departure) {
		this.departure = departure;
	}
}

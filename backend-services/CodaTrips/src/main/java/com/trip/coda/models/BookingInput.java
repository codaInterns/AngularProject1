package com.trip.coda.models;

public class BookingInput {
	private String userId;
	private String flightName,source,destination,departure;
	public String getUserId() {
		return userId;
	}
	public void setUserId(String string) {
		this.userId = string;
	}
	public String getFlightName() {
		return flightName;
	}
	public void setFlightName(String flightName) {
		this.flightName = flightName;
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

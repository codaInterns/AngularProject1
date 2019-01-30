package com.trip.coda.models;




public class Flight {

private long flightId;

private String flightName;


private String source;

private String destination;


private String departure;



private int flightPrice;

public long getFlightId() {
	return flightId;
}


public void setFlightId(long flightId) {
	this.flightId = flightId;
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


public int getFlightPrice() {
	return flightPrice;
}


public void setFlightPrice(int flightPrice) {
	this.flightPrice = flightPrice;
}






}

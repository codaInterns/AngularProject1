package com.trip.coda.models;



import com.trip.coda.validators.ValidEmail;
import com.trip.coda.validators.ValidPassword;



public class User {

private int userId;	

private String userEmail;

private String userPassword;
public int getUserId() {
	return userId;
}
public void setUserId(int userId) {
	this.userId = userId;
}
public String getUserEmail() {
	return userEmail;
}
public void setUserEmail(String userEmail) {
	this.userEmail = userEmail;
}
public String getUserPassword() {
	return userPassword;
}
public void setUserPassword(String userPassword) {
	this.userPassword = userPassword;
}


}

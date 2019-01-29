package com.trip.coda.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.trip.coda.validators.ValidEmail;
import com.trip.coda.validators.ValidPassword;


@Entity
@Table(name="users")
public class User {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private int userId;	
@Column(name="email")
@ValidEmail
private String userEmail;
@Column(name="password")
@ValidPassword
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

package com.test5.test5;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
@Entity
@Table(name="users")
public class UserDB {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private int id;	
@Column(name="email")
@ValidEmail
private String email;
@Column(name="password")
@ValidPassword
private String password;

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}

public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
}

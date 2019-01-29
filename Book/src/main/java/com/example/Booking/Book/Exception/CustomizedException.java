package com.example.Booking.Book.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


public class CustomizedException extends RuntimeException{
	public static final long serialversionUID=5L;
	private int code;
	private String message;
	public CustomizedException(int code, String message) {

		this.code = code;
		this.message = message;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
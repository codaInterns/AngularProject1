package com.example.Booking.Book.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class Excep_ctrl extends ResponseEntityExceptionHandler{
	@ExceptionHandler(value=CustomizedExcp.class)
	public ResponseEntity<Object> handleException(CustomizedExcp ex,WebRequest req)
	{
		Errorpogo e=new Errorpogo();
		e.setCode(ex.getCode());
		e.setMessage(ex.getMessage());
		return new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
	}
}

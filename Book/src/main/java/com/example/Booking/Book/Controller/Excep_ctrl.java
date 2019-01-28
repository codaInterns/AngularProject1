package com.example.Booking.Book.Controller;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.omg.CORBA.NO_RESPONSE;
import org.springframework.beans.TypeMismatchException;
import org.springframework.boot.webservices.client.HttpWebServiceMessageSenderBuilder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException.BadRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.Booking.Book.Exception.CustomizedExcp;
import com.example.Booking.Book.Model.Errorpogo;

@ControllerAdvice
public class Excep_ctrl extends ResponseEntityExceptionHandler{
	@ExceptionHandler({CustomizedExcp.class})
	public  ResponseEntity<Object> handleCustomExc(CustomizedExcp ex,WebRequest req)
	{
		System.out.println("hiii from exception controller");
     	Errorpogo ep=new Errorpogo();
     	ep.setCode(ex.getCode());
     	ep.setMessage(ex.getMessage());
     	return new ResponseEntity<Object>(ep,HttpStatus.NOT_FOUND);		
	}		
//
//	@ResponseStatus(HttpStatus.NOT_FOUND)
//	@ExceptionHandler(value= {BadRequest.class})
//	public ResponseEntity<Object> handleMethodArgumentNotValid(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request){
//     	Errorpogo ep=new Errorpogo();
//	     	ep.setCode(status.value());
//	     	ep.setMessage(ex.getLocalizedMessage());
//	        return new ResponseEntity<>(ep, status);
//	    }	

	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<Object> handleMethodArgumentNotValid(Exception e,HttpHeaders headers, HttpStatus status, WebRequest request) {
		System.out.println("hiii from exception controllersss");
		Errorpogo ep=new Errorpogo();
		ep.setMessage(e.getLocalizedMessage());
		System.out.println("e.getLocalizedMessage()");
		ep.setCode(HttpStatus.BAD_REQUEST.value());
		return new ResponseEntity<>(ep,HttpStatus.BAD_REQUEST);
	}
	
	//@ExceptionHandler(HttpMessageNotReadableException.class)
	
	
	
//	@ExceptionHandler(value= {MethodArgumentNotValidException.class})
//	public ResponseEntity<Object> handleException(MethodArgumentNotValidException e,HttpServletRequest req)
//	{
//		System.out.println("hiii from exception controller");
//		Errorpogo ep=new Errorpogo();
//		ep.setMessage(e.getLocalizedMessage());
//		System.out.println(e.getLocalizedMessage());
//		ep.setCode(HttpStatus.BAD_REQUEST.value());
//		return new ResponseEntity<>(ep,HttpStatus.BAD_REQUEST);
//	}
//	
	
}


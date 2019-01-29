package com.example.Booking.Book.Exception;

import org.springframework.boot.web.servlet.error.DefaultErrorAttributes;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.WebRequest;

import java.util.HashMap;
import java.util.Map;
 
//@Component
//public class CustomDefaultException extends  DefaultErrorAttributes{
//	@Override
//	public Map<String, Object> getErrorAttributes(WebRequest webRequest, boolean includeStackTrace){
//		// TODO Auto-generated method stub
//		final Map<String, Object> errorAttributes = super.getErrorAttributes(webRequest, includeStackTrace);
//		final Map<String,Object> MyerrorAttributes=new HashMap<String, Object>(); 
//		Throwable throwable = getError(webRequest);
//		
//		MyerrorAttributes.put("message",errorAttributes.get("message"));
//	        Throwable cause = throwable.getCause();
//	        if (cause != null) {
//	        	System.out.println("hello from default error attribute");
//	            Map<String, Object> causeErrorAttributes = new HashMap<>();
//	            causeErrorAttributes.put("exception", cause.getClass().getName());
//	            causeErrorAttributes.put("message", cause.getMessage());
//	            errorAttributes.put("error", causeErrorAttributes);
//	        }
//	        return MyerrorAttributes;	    }
//}
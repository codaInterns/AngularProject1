package com.test5.test5.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test5.test5.models.Book;
import com.test5.test5.models.UserDB;
import com.test5.test5.models.bookInput;
import com.test5.test5.models.options;
import com.test5.test5.repo.bookInterface;

@RestController
@RequestMapping("/JwtAuth")
@CrossOrigin("http://localhost:4200")
public class BookController {
	
	@Autowired
	private bookInterface book;
	private bookInput opt;
	
	@PostMapping(path = "/book/" , consumes = "application/json" , produces = "application/json")
	public ResponseEntity<Boolean> postUser(@RequestBody bookInput opt,final HttpServletRequest request)throws Exception {
		
		HttpHeaders responseHeaders = new HttpHeaders();
		String isValidAuth = (String) request.getAttribute("valid");
		responseHeaders.set("Authentication", isValidAuth);
		if(isValidAuth.equals("false")){
			return new ResponseEntity<Boolean>(false,responseHeaders,HttpStatus.OK);
		}
	    responseHeaders.set("valid", isValidAuth);
		Book bookDb=new Book();
		try {
			bookDb.setName(opt.getName());
			bookDb.setDeparture(opt.getDeparture());
			bookDb.setDestination(opt.getDestination());
			bookDb.setSource(opt.getSource());
			book.save(bookDb);
			
			return new ResponseEntity<Boolean>(true,responseHeaders,HttpStatus.OK);
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return new ResponseEntity<Boolean>(false,responseHeaders,HttpStatus.OK);
		}
		
	}
}

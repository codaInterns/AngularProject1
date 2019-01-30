package com.trip.coda.controllers;

import static org.hamcrest.Matchers.containsString;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.trace.http.HttpTrace.Response;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.trip.coda.models.AccountInput;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class JwtControllerTest {
	
	 @Autowired
	 private MockMvc mockMvc;
	 @Autowired 
	 private ObjectMapper mapper;
	 
	
	 @Test
	 public void testJwtAuthController() throws Exception{
		 AccountInput mockInput=new AccountInput();
		 
		 mockInput.setUserEmail("aa@aa.com");
		 mockInput.setUserPassword("Kaushik@1");
		
		 String json=mapper.writeValueAsString(mockInput);
		 
		
		 
		 MvcResult mvcResult = mockMvc.perform(post("/api/jwt/")
				 .content(json).contentType(MediaType.APPLICATION_JSON)
				 .accept(MediaType.APPLICATION_JSON))
		 		 .andExpect(status().isOk()).andReturn();
 		 String content = mvcResult.getResponse().getContentAsString();
 		 System.out.println(content);
 	
	 }
	
}

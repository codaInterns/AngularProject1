package com.test5.test5.controllers;
import static org.hamcrest.Matchers.containsString;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;



import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.test5.test5.models.FlightInput;

import io.micrometer.core.ipc.http.HttpSender.Response;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class FlightsControllerTest {
	
	 @Autowired
	 private MockMvc mockMvc;
	 @Autowired 
	 private ObjectMapper mapper;
	 
	
	 @Test
	 public void testGetFlight() throws Exception{
		 mockMvc.perform(get("/api/getFlights")
				 .accept(MediaType.APPLICATION_JSON))
		 		 .andExpect(status().isOk())
		 		 .andExpect(MockMvcResultMatchers.jsonPath("$[*].name").exists())
		 		 .andDo(print());
		 		 
		// assertThat(response.getStatus(),is(equalTo(200)));
		 
	 }
	 @Test
	 public void testGetFlights() throws Exception{
		 FlightInput mockInput=new FlightInput();
		 mockInput.setDeparture("04:00:00");
		 mockInput.setDestination("delhi");
		 mockInput.setSource("chennai");
		 String json=mapper.writeValueAsString(mockInput);
		 mockMvc.perform(post("/api/getFlight/")
				 .content(json).contentType(MediaType.APPLICATION_JSON)
				 .accept(MediaType.APPLICATION_JSON))
		 		 .andExpect(status().isOk())
		 		 .andExpect(MockMvcResultMatchers.jsonPath("$[*].name").exists())
 		         .andDo(print());
		 //assertThat(response.getStatus(),is(equalTo(200)));
	 }
	
}

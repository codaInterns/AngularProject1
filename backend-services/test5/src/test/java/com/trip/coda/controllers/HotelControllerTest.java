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
import com.test5.test5.models.HotelInput;
import com.test5.test5.models.options;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class HotelControllerTest {
	
	 @Autowired
	 private MockMvc mockMvc;
	 @Autowired 
	 private ObjectMapper mapper;
	 
	
	 @Test
	 public void testGetAllHotels() throws Exception{
		 mockMvc.perform(get("/api/gethotels")
				 .accept(MediaType.APPLICATION_JSON))
		 		 .andExpect(status().isOk())
		 		 .andExpect(MockMvcResultMatchers.jsonPath("$[*].hotel_name").exists())
		 		 .andDo(print());
		 		 
		// assertThat(response.getStatus(),is(equalTo(200)));
		 
	 }
	 @Test
	 public void testGetHotels() throws Exception{
		 HotelInput mockInput=new HotelInput();
		 
		 mockInput.setHotel_place("bistro");
		 String json=mapper.writeValueAsString(mockInput);
		 mockMvc.perform(post("/api/getHotel/")
				 .content(json).contentType(MediaType.APPLICATION_JSON)
				 .accept(MediaType.APPLICATION_JSON))
		 		 .andExpect(status().isOk())
		 		 .andExpect(MockMvcResultMatchers.jsonPath("$[*].hotel_name").exists())
 		         .andDo(print());
		 //assertThat(response.getStatus(),is(equalTo(200)));
	 }
	 @Test
	 public void testaddHotel() throws Exception{
		 options mockInput=new options();
		 mockInput.setEmail("new@olivecastle.com");
		 mockInput.setPassword("test");
		
		 String json=mapper.writeValueAsString(mockInput);
		 mockMvc.perform(post("/api/addhotel/")
				 .content(json).contentType(MediaType.APPLICATION_JSON)
				 .accept(MediaType.APPLICATION_JSON))
		 		 .andExpect(status().isOk());
 		         
		 //assertThat(response.getStatus(),is(equalTo(200)));
	 }
	
	
}

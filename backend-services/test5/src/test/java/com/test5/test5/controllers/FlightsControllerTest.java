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

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class FlightsControllerTest {
	
	 @Autowired
	 private MockMvc mockMvc;

	 
	 @Test
	    public void getMessage() throws Exception {
	        this.mockMvc.perform(get("/api/test")).andDo(print()).andExpect(content().string(containsString("hip")));
	    }
	 @Test
	 public void testGetFlight() throws Exception{
		 MockHttpServletResponse response =mockMvc.perform(get("/api/getFlights").accept(MediaType.APPLICATION_JSON)).andReturn().getResponse();
		 assertThat(response.getStatus(),is(equalTo(200)));
	 }
	
}

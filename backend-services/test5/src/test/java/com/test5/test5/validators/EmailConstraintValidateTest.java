package com.test5.test5.validators;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmailConstraintValidateTest {

	@Test
	public void testIsValid() {
		EmailConstraintValidator ecv=new EmailConstraintValidator();
		assertTrue(ecv.isValid("sivani@olivecastle.com",));
	}
	
	
	
}

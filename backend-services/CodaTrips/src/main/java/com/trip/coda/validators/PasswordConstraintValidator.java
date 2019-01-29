package com.trip.coda.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;


public class PasswordConstraintValidator implements ConstraintValidator<ValidPassword, String>{

	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		String pattern = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}";
		
		return value.matches(pattern);
	}
}

package com.test5.test5;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class EmailConstraintValidator implements ConstraintValidator<ValidEmail, String>{

	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		String pattern  = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
		if(value.matches(pattern))
			return true;
		
		return false;
	}
	

}

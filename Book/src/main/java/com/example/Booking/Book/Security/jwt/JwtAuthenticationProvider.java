package com.example.Booking.Book.Security.jwt;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.impl.crypto.JwtSignatureValidator;

@Component
public class JwtAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {

	
	@Autowired
	private JwtValidator validator;
	
	@Override
	public boolean supports(Class<?> authentication) {
		return (JwtAuthenticationToken.class.isAssignableFrom(authentication));
	}

	@Override
	protected void additionalAuthenticationChecks(UserDetails userDetails,
			UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected UserDetails retrieveUser(String username, UsernamePasswordAuthenticationToken authentication)
			throws AuthenticationException {
		JwtAuthenticationToken jwtAuthenticationToken =(JwtAuthenticationToken)authentication;	
		String token=jwtAuthenticationToken.getToken();
		jwtUser juser=validator.validate(token);
		if(juser==null)
		{
			throw new RuntimeException("incorrect jwt token");
		}
		System.out.println("xx");
		List<GrantedAuthority> grantedAuthorities=AuthorityUtils
				.commaSeparatedStringToAuthorityList(juser.getRole());
		return new JwtUserDetails(juser.getUserName(),juser.getId(),token,grantedAuthorities);
	}

}

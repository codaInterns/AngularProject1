package com.trip.coda.migration;

import java.math.BigDecimal;

import org.apache.ibatis.migration.MigrationScript;


public class ChangeLoger implements MigrationScript  {
	public BigDecimal getId() {
	    return BigDecimal.valueOf(1L);
	  }

	  public String getDescription() {
	    return "Create changelog";
	  }

	  public String getUpScript() {
	    return "CREATE TABLE changelog ("
	      + "ID NUMERIC(20,0) NOT NULL,"
	      + "APPLIED_AT VARCHAR(25) NOT NULL,"
	      + "DESCRIPTION VARCHAR(255) NOT NULL); "

	      + "ALTER TABLE changelog "
	      + "ADD CONSTRAINT PK_changelog "
	      + "PRIMARY KEY (id);";
	  }

	  public String getDownScript() {
	    return "DROP TABLE changelog;";
	  }
}

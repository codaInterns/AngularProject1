------------------------------------------------------------------------
-- MyBatis Migrations - script
------------------------------------------------------------------------
-- 20190131062125_secondVersion.sql
-- @UNDO
-- SQL to undo the change goes here.

	ALTER TABLE flights
DROP testing varchar(20);




DELETE FROM CHANGELOG WHERE ID = 20190131062125;

------------------------------------------------------------------------
-- MyBatis Migrations SUCCESS
-- Total time: 0s
-- Finished at: Thu Jan 31 12:22:39 IST 2019
-- Final Memory: 5M/479M
------------------------------------------------------------------------

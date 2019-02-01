------------------------------------------------------------------------
-- MyBatis Migrations - script
------------------------------------------------------------------------
-- 20190131062125_secondVersion.sql
--
--    Copyright 2010-2016 the original author or authors.
--
--    Licensed under the Apache License, Version 2.0 (the "License");
--    you may not use this file except in compliance with the License.
--    You may obtain a copy of the License at
--
--       http://www.apache.org/licenses/LICENSE-2.0
--
--    Unless required by applicable law or agreed to in writing, software
--    distributed under the License is distributed on an "AS IS" BASIS,
--    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
--    See the License for the specific language governing permissions and
--    limitations under the License.
--

-- // secondVersion
-- Migration SQL that makes the change goes here.
drop table flights;
create table flights(flights_id int(20),name varchar(50),source varchar(50),destination varchar(50),departure varchar(50),price int,flightType varchar(20));


insert into flights values(1,'indigo','chennai','delhi','04:00:00' , 1200,'test');

insert into flights values(2,'air india','chennai','Mumbai','04:30:00',2300,'test');

insert into flights values(3,'jet airways','delhi','Toronto','03:00:00',12000,'test');





INSERT INTO CHANGELOG (ID, APPLIED_AT, DESCRIPTION) VALUES (20190131062125, '2019-01-31 12:21:30', 'secondVersion');

------------------------------------------------------------------------
-- MyBatis Migrations SUCCESS
-- Total time: 0s
-- Finished at: Thu Jan 31 12:21:30 IST 2019
-- Final Memory: 5M/479M
------------------------------------------------------------------------

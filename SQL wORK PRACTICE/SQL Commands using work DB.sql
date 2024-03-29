select * from ProjAuto_Tags

-- SELECT DISTINCT 
select distinct controller_id, network_id, device_name from ProjAuto_Tags where device_name = 'SS506719'

-- SELECT COUNT(DISTINCT) 
select count(distinct io_point) from ProjAuto_Tags

select count (distinct tag_config.value('(configuration/controller_index)[1]', 'INTEGER')) from ProjAuto_Tags

-- WHERE CLAUSE

select distinct tag_config.value('(configuration/controller_index)[1]', 'INTEGER') from ProjAuto_Tags WHERE tag_config.value('(configuration/controller_index)[1]', 'INTEGER') > 100
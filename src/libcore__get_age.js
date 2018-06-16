//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * get whole age
 * \param[in] date1 start date
 * \param[in] date2 end date
 * \return result whole age
 */
function libcore__get_age(date1, date2)
{
	if ((date1 instanceof Date) === false) return 1;
	if ((date2 instanceof Date) === false) return 2;


	if (date1 > date2)
	{
		var tmp = date2;
		date2 = date1;
		date1 = tmp;
	}

	if (date1.getFullYear() >= date2.getFullYear()) return 3;

	var year1 = date1.getFullYear();
	var year2 = date2.getFullYear();

	var age = year2 - year1 - 1;

	if (date1.getMonth()   < date2.getMonth())   return ++age;
	if (date1.getMonth()   > date2.getMonth())   return age;

	if (date1.getDate()    < date2.getDate())    return ++age;
	if (date1.getDate()    > date2.getDate())    return age;

	if (date1.getHours()   < date2.getHours())   return ++age;
	if (date1.getHours()   > date2.getHours())   return age;

	if (date1.getMinutes() < date2.getMinutes()) return ++age;
	if (date1.getMinutes() > date2.getMinutes()) return age;

	if (date1.getSeconds() < date2.getSeconds()) return ++age;
	if (date1.getSeconds() > date2.getSeconds()) return age;

	return ++age;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

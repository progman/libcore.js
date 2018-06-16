//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * convert from string to date
 * \param[in] str string
 * \return result date
 */
function libcore__str2date(str)
{
//  0000000000111111111
//  0123456789012345678
// "1974-08-12 00:00:00"

	var null_date = new Date(1970, 0, 1);

	if (typeof str !== 'string')
	{
		return null_date;
	}

	if
	(
		(str.length !== 19)  ||
		(str[4]     !== '-') ||
		(str[7]     !== '-') ||
		(str[10]    !== ' ') ||
		(str[13]    !== ':') ||
		(str[16]    !== ':')
	)
	{
		return null_date;
	}

	var year  = str.substr(0,  4);
	var month = str.substr(5,  2);
	var day   = str.substr(8,  2);
	var hour  = str.substr(11, 2);
	var min   = str.substr(14, 2);
	var sec   = str.substr(17, 2);

	if
	(
		(libcore.is_uint(year)  === false) ||
		(libcore.is_uint(month) === false) ||
		(libcore.is_uint(day)   === false) ||
		(libcore.is_uint(hour)  === false) ||
		(libcore.is_uint(min)   === false) ||
		(libcore.is_uint(sec)   === false)
	)
	{
		return null_date;
	}


	return new Date(year, month - 1, day, hour, min, sec);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * strip date in date object
 * \param[in] source date object
 * \return result date object
 */
function libcore__date_strip(source_date)
{
	"use strict";

	var target_date = new Date();

	if ((source_date instanceof Date) === false)
	{
		target_date.setTime(0);
		target_date.setHours(0);
		target_date.setMinutes(0);
		target_date.setSeconds(0);
		target_date.setMilliseconds(0);
	}
	else
	{
		target_date.setTime(source_date.getTime());
		target_date.setHours(0);
		target_date.setMinutes(0);
		target_date.setSeconds(0);
		target_date.setMilliseconds(0);
	}

	return target_date;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

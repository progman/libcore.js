//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * shift date use timezone
 * \param[in] date date
 * \param[in] timezone timezone
 * \return result shifted date
 */
function libcore__date_shift_timezone(date, timezone)
{
	var null_date = new Date(1970, 0, 1);
	if ((date instanceof Date) === false) return null_date;
	if (typeof timezone !== 'number') return null_date;

	var total_ms = date.getTime();
	date.setTime(total_ms + (timezone * 60 * 60 * 1000));

	return date;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

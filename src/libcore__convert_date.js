//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * convert unixtime to user friedly text
 * \param[in] gmt_offset gmt offset
 * \param[in] unixtime unixtime
 * \return result user friedly text
 */
function libcore__convert_date(gmt_offset, unixtime)
{
	"use strict";

	unixtime = Number(unixtime);
	if (isNaN(unixtime) === true)
	{
		unixtime = 0;
	}


	var date_day_now = new Date();
	date_day_now = libcore.date_strip(date_day_now);

	var date_day_prev = new Date();
	date_day_prev.setTime(date_day_prev.getTime() - (60*60*24*1000));
	date_day_prev = libcore.date_strip(date_day_prev);

	var date_day_next = new Date();
	date_day_next.setTime(date_day_next.getTime() + (60*60*24*1000));
	date_day_next = libcore.date_strip(date_day_next);

	var xdate = new Date();

//alert(date_strip(date_now));

	xdate.setTime((unixtime * 1000) + (gmt_offset * 60 * 60 * 1000) + (xdate.getTimezoneOffset() * 60 * 1000));


//alert('xdate.getTime():' + xdate.getTime() + ', date_day_now.getTime():' + date_day_now.getTime() + ', date_day_next.getTime():' + date_day_next.getTime());
	if
	(
		(xdate.getTime() > date_day_now.getTime()) &&
		(xdate.getTime() < date_day_next.getTime())
	)
	{
		var str = 'Сегодня&nbsp;в&nbsp;';

		var hour = String(xdate.getHours())
		if (hour.length === 1) hour = '0' + hour;
		str = str + hour;

		str = str + ':';

		var min = String(xdate.getMinutes())
		if (min.length === 1) min = '0' + min;
		str = str + min;

		return str;
	}

//alert('xdate.getTime():' + xdate.getTime() + ', date_day_now.getTime():' + date_day_now.getTime() + ', date_day_prev.getTime():' + date_day_prev.getTime());
	if
	(
		(xdate.getTime() < date_day_now.getTime()) &&
		(xdate.getTime() > date_day_prev.getTime())
	)
	{
		var str = 'Вчера&nbsp;в&nbsp;';

		var hour = String(xdate.getHours())
		if (hour.length === 1) hour = '0' + hour;
		str = str + hour;

		str = str + ':';

		var min = String(xdate.getMinutes())
		if (min.length === 1) min = '0' + min;
		str = str + min;

		return str;
	}


	var str = '';
	var day = String(xdate.getDate());
	if (day.length === 1) day = '0' + day;
	str = str + day;

	str = str + '&nbsp;';

	var month = String(xdate.getMonth() + 1);
	if (month.length === 1) month = '0' + month;

	str = str + libcore.getmonthname(month);


	var year = xdate.getFullYear();
	var year_now = date_day_now.getFullYear();

	if (year !== year_now)
	{
		str = str + '&nbsp;';
		str = str + year;
	}


//	str = str + ', ';
//	str = str + date('H:i', strtotime($unixtime));


	if (str === '30 ноября 1999, 00:00')
	{
		return 'unknown';
	}


	return str;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

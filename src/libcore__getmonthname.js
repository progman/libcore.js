//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * convert month number to month name
 * \param[in] month month number, for example 1 or '01'
 * \param[in] flag_simple select simple or complex name
 * \return month name
 */
function libcore__getmonthname(month, flag_simple)
{
	"use strict";

	if (typeof flag_simple !== 'boolean')
	{
		flag_simple = false;
	}

	var month_int = 0;
	if ((typeof month === 'number') || (typeof month === 'string'))
	{
		month_int = parseInt(month, 10);
		if (isNaN(month_int) === true)
		{
			month_int = 0;
		}
	}
	if (month_int > 12)
	{
		month_int = 0;
	}

	var month_list =
	[
		{ "rus" : { "complex" : 'Мартобря', "simple" : 'Мартобрь', "short" : '???' }, "eng" : { "complex" : 'Unknown',   "simple" : 'Unknown',   "short" : '???' } },
		{ "rus" : { "complex" : 'Января',   "simple" : 'Январь',   "short" : 'Янв' }, "eng" : { "complex" : 'January',   "simple" : 'January',   "short" : 'Jan' } },
		{ "rus" : { "complex" : 'Февраля',  "simple" : 'Февраль',  "short" : 'Фев' }, "eng" : { "complex" : 'February',  "simple" : 'February',  "short" : 'Feb' } },
		{ "rus" : { "complex" : 'Марта',    "simple" : 'Март',     "short" : 'Мар' }, "eng" : { "complex" : 'March',     "simple" : 'March',     "short" : 'Mar' } },
		{ "rus" : { "complex" : 'Апреля',   "simple" : 'Апрель',   "short" : 'Апр' }, "eng" : { "complex" : 'April',     "simple" : 'April',     "short" : 'Apr' } },
		{ "rus" : { "complex" : 'Мая',      "simple" : 'Май',      "short" : 'Май' }, "eng" : { "complex" : 'May',       "simple" : 'May',       "short" : 'May' } },
		{ "rus" : { "complex" : 'Июня',     "simple" : 'Июнь',     "short" : 'Июн' }, "eng" : { "complex" : 'June',      "simple" : 'June',      "short" : 'Jun' } },
		{ "rus" : { "complex" : 'Июля',     "simple" : 'Июль',     "short" : 'Июл' }, "eng" : { "complex" : 'July',      "simple" : 'July',      "short" : 'Jul' } },
		{ "rus" : { "complex" : 'Августа',  "simple" : 'Август',   "short" : 'Авг' }, "eng" : { "complex" : 'August',    "simple" : 'August',    "short" : 'Aug' } },
		{ "rus" : { "complex" : 'Сентября', "simple" : 'Сентябрь', "short" : 'Сен' }, "eng" : { "complex" : 'September', "simple" : 'September', "short" : 'Sep' } },
		{ "rus" : { "complex" : 'Октября',  "simple" : 'Октябрь',  "short" : 'Окт' }, "eng" : { "complex" : 'October',   "simple" : 'October',   "short" : 'Oct' } },
		{ "rus" : { "complex" : 'Ноября',   "simple" : 'Ноябрь',   "short" : 'Ноя' }, "eng" : { "complex" : 'November',  "simple" : 'November',  "short" : 'Nov' } },
		{ "rus" : { "complex" : 'Декабря',  "simple" : 'Декабрь',  "short" : 'Дек' }, "eng" : { "complex" : 'December',  "simple" : 'December',  "short" : 'Dec' } }
	];


	if (flag_simple === false)
	{
		return month_list[month_int].rus.complex.toLowerCase();
	}

	return month_list[month_int].rus.simple;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

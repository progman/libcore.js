//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// 0.3.2
// Alexey Potehin <gnuplanet@gmail.com>, http://www.gnuplanet.ru/doc/cv
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var libcore =
{
	"log"           : libcore__log,
	"get_microtime" : libcore__get_microtime,
	"get_unixtime"  : libcore__get_unixtime,
	"is_uint"       : libcore__is_uint,
	"is_sint"       : libcore__is_sint,
	"str2uint"      : libcore__str2uint,
	"str2sint"      : libcore__str2sint,
	"min"           : libcore__min,
	"max"           : libcore__max,
	"cmp"           : libcore__cmp,
	"clone"         : libcore__clone,
	"sort"          : libcore__sort,
	"uniq"          : libcore__uniq,
	"rnd"           : libcore__rnd,
	"str_crop"      : libcore__str_crop,
	"array_merge"   : libcore__array_merge,
	"array_crop"    : libcore__array_crop,
	"array_expand"  : libcore__array_expand,
	"array_limit"   : libcore__array_limit,
	"array_remix"   : libcore__array_remix,
	"array_filter"  : libcore__array_filter,
	"jdraw"         : libcore__jdraw,
	"getmonthname"  : libcore__getmonthname,
	"date_strip"    : libcore__date_strip,
	"convert_date"  : libcore__convert_date
};
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * show message on browser console
 * \param[in] msg message
 * \param[in] flag_enable turn on show
 */
function libcore__log(msg, flag_enable)
{
	"use strict";

	if (typeof console === "undefined")
	{
		return;
	}

	if ((typeof flag_enable === 'boolean') && (flag_enable === false))
	{
		return;
	}

	console.log(msg);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * get current microtime
 * \return microtime
 */
function libcore__get_microtime()
{
	"use strict";

	var current_date = new Date();
	return current_date.getTime();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * get current unixtime
 * \return unixtime
 */
function libcore__get_unixtime()
{
	"use strict";

	var unixtime = libcore.get_microtime() / 1000;

	return unixtime;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * check whether a string is equivalent to regexp [+]?[0-9]+
 * \param[in] val string for check
 * \return flag correct check
 */
function libcore__is_uint(val)
{
	"use strict";

	if ((typeof val !== 'number') && (typeof val !== 'string'))
	{
		return false;
	}

	var str = String(val);

	if (str.length === 0)
	{
		return false;
	}

	for (var i=0; i < str.length; i++)
	{
		if ((str[i] < '0') || (str[i] > '9'))
		{
			if (i === 0)
			{
				if (str[i] === '+')
				{
					continue;
				}
			}
			return false;
		}
	}

	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * check whether a string is equivalent to regexp [-+]?[0-9]+
 * \param[in] val string for check
 * \return flag correct check
 */
function libcore__is_sint(val)
{
	"use strict";

	if ((typeof val !== 'number') && (typeof val !== 'string'))
	{
		return false;
	}

	var str = String(val);

	if (str.length === 0)
	{
		return false;
	}

	for (var i=0; i < str.length; i++)
	{
		if ((str[i] < '0') || (str[i] > '9'))
		{
			if (i === 0)
			{
				if ((str[i] === '-') || (str[i] === '+'))
				{
					continue;
				}
			}
			return false;
		}
	}

	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * convert string to uint or return value_default
 * \param[in] str input string
 * \param[in] value_default default value
 * \return uint
 */
function libcore__str2uint(str, value_default)
{
	"use strict";

	if (typeof value_default !== 'number')
	{
		value_default = 0;
	}
	var value = value_default;

	if (libcore.is_uint(str) === true)
	{
		value = parseInt(str, 10);
	}

	return value;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * convert string to sint or return value_default
 * \param[in] str input string
 * \param[in] value_default default value
 * \return sint
 */
function libcore__str2sint(str, value_default)
{
	"use strict";

	if (typeof value_default !== 'number')
	{
		value_default = 0;
	}
	var value = value_default;

	if (libcore.is_sint(str) === true)
	{
		value = parseInt(str, 10);
	}

	return value;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * find minumal number
 * \param[in] val1 number one
 * \param[in] val1 number two
 * \return minimal number of number one and number two
 */
function libcore__min(val1, val2)
{
	"use strict";

	if (val1 < val2)
	{
		return val1;
	}

	return val2;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * find maximal number
 * \param[in] val1 number one
 * \param[in] val1 number two
 * \return maximal number of number one and number two
 */
function libcore__max(val1, val2)
{
	"use strict";

	if (val1 > val2)
	{
		return val1;
	}

	return val2;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * compare two arguments
 * \param[in] source argument one
 * \param[in] target argument two
 * \param[in] flag_identity flag for enable hard identity
 * \return result
 */
function libcore__cmp(source, target, flag_identity)
{
	"use strict";

	if (typeof flag_identity !== 'boolean')
	{
		flag_identity = false;
	}


	if (typeof source !== typeof target) return false;


	if (typeof source === 'boolean')
	{
		return (source === target) ? true : false;
	}


	if (typeof source === 'number')
	{
		return (source === target) ? true : false;
	}


	if (typeof source === 'string')
	{
		return (source === target) ? true : false;
	}


	if (source === null)
	{
		return (source === target) ? true : false;
	}


	if (typeof source === 'undefined')
	{
		return (source === target) ? true : false;
	}


	if (typeof source === 'function')
	{
		return (source.toString() === target.toString()) ? true : false;
	}


	if ((source instanceof RegExp) === true)
	{
		return (source === target) ? true : false;
	}


	if ((source instanceof Date) === true)
	{
		if ((source.getTime() === target.getTime()) && (source.getMilliseconds() === target.getMilliseconds()))
		{
			return true;
		}

		return false;
	}


	if ((source instanceof Array) === true)
	{
		if (source.length !== target.length) return false;

		for (var i=0; i < source.length; i++)
		{
			if (libcore.cmp(source[i], target[i], flag_identity) === false)
			{
				return false;
			}
		}

		return true;
	}


	if (typeof source === 'object')
	{
		if (flag_identity === false)
		{
			for (var target_field in target)
			{
				var flag_found = false;
				for (var source_field in source)
				{
					if (source_field === target_field)
					{
						if (libcore.cmp(source[source_field], target[target_field], flag_identity) === true)
						{
							flag_found = true;
							break;
						}
					}
				}
				if (flag_found === false) return false;
			}
		}
		else
		{
			for (var source_field in source)
			{
				var flag_found = false;
				for (var target_field in target)
				{
					if (source_field === target_field)
					{
						if (libcore.cmp(source[source_field], target[target_field], flag_identity) === true)
						{
							flag_found = true;
							break;
						}
					}
				}
				if (flag_found === false) return false;
			}
		}

		return true;
	}


	libcore.log('ERROR[libcore.cmp()]: not implementation type ' + typeof source);
	return false;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * clone variable
 * \param[in] source source variable
 * \return cloned variable
 */
function libcore__clone(source, flag_prototype)
{
	"use strict";

/*
	for simple objects use:
	var target = { "field1" : source.field1, "field1" : source.field2 };
*/

	if (typeof source === 'boolean')
	{
		return source;
	}


	if (typeof source === 'number')
	{
		return source;
	}


	if (typeof source === 'string')
	{
		return source;
	}


	if (source === null)
	{
		return source;
	}


	if (typeof source === 'undefined')
	{
		return source;
	}


	if (typeof source === 'function')
	{
		return source;
	}


	if ((source instanceof RegExp) === true)
	{
		return source;
	}


	if ((source instanceof Date) === true)
	{
		var tmp = new Date();
		tmp.setTime(source.getTime());
		return tmp;
	}


	if ((source instanceof Array) === true)
	{
//		return source.slice(0);

		var tmp = [];
		for (var i=0; i < source.length; i++)
		{
			tmp.push(libcore.clone(source[i]));
		}
		return tmp;
	}


	if (typeof source === 'object')
	{
		var tmp = {};
//		var tmp = new source.constructor();
//		var tmp = source.constructor();
//		var tmp = Object.create(source);
//		var tmp = Object.assign({}, source);


		if (flag_prototype === true)
		{
			tmp.__proto__ = source.__proto__;
		}


		for (var source_field in source)
		{
			if (source.hasOwnProperty(source_field))
			{
				tmp[source_field] = libcore.clone(source[source_field]);
			}
		}
		return tmp;
	}


	libcore.log('WARNING[libcore.clone()]: not implementation type ' + typeof source);
	return JSON.parse(JSON.stringify(source));
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * sort array
 * \param[in] input input array
 * \param[in] sort_factor field name or sort function for array of objects
 * \return sort array
 */
function libcore__sort(input, sort_factor)
{
	"use strict";

	if ((input instanceof Array) === false)
	{
		return [];
	}


	var output = libcore.clone(input); // отвязываем массив


	for (;;)
	{
		if (typeof sort_factor === "function")
		{
			output.sort(sort_factor);
			break;
		}


		if (typeof sort_factor === "string")
		{
			output.sort(function(a, b)
			{
				if (a[sort_factor]  <  b[sort_factor])
				{
					return -1;
				}

				if (a[sort_factor]  >  b[sort_factor])
				{
					return 1;
				}

				if (a[sort_factor] === b[sort_factor])
				{
					return 0;
				}
			});
		}


		output.sort();
		break;
	}


	return output;


/*
	if ((input instanceof Array) === false)
	{
		return [];
	}


	if (typeof field_name !== "string")
	{
		var output = libcore.clone(input); // отвязываем массив
		output.sort();
		return output;
	}


	var output = [];
	var input_free = libcore.clone(input); // отвязываем массив
	var field_list = [];

	for (var i=0; i < input_free.length; i++)
	{
		field_list.push(input_free[i][field_name]);
	}
	field_list = libcore__sort(field_list);

	for (var i=0; i < field_list.length; i++)
	{
		for (var j=0; j < input_free.length; j++)
		{
			if (input_free[j][field_name] === field_list[i])
			{
				output.push(libcore.clone(input_free[j]));
				input_free[j][field_name] = null;
				break;
			}
		}
	}


	return output;
*/
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * uniq array
 * \param[in] input input array
 * \param[in] sort_factor field name or sort function for array of objects
 * \return uniq array
 */
function libcore__uniq(input, sort_factor)
{
	"use strict";

	if ((input instanceof Array) === false)
	{
		return [];
	}


	var input_free = libcore.sort(input, sort_factor);


// set value not equal input_free[0]
	var value = false;
	if (input_free.length !== 0)
	{
		if (input_free[0] === value)
		{
			value = true;
		}
	}


	var output = [];
	for (var i=0; i < input_free.length; i++)
	{
		if (libcore.cmp(value, input_free[i], true) === false)
		{
			value = input_free[i];
			output.push(value);
		}
	}


	return output;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * get rnd number from min to max
 * \param[in] min minimal number
 * \param[in] max maximal number
 * \return rnd number from min to max
 */
function libcore__rnd(min, max)
{
	"use strict";

	if (min === max)
	{
		return min;
	}

	if (max < min)
	{
		var tmp = min;
		min = max;
		max = tmp;
	}

	if ((Math.floor(min) !== min) || (Math.floor(max) !== max))
	{
		return Math.random() * (max - min) + min;
	}

	var rnd = Math.floor(Math.random() * (max - min + 1)) + min;

	return (rnd > max) ? max : rnd;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * crop string
 * \param[in] source string
 * \param[in] limit length limit
 * \return croped string
 */
function libcore__str_crop(source, limit)
{
	"use strict";

	if (source.length < limit)
	{
		return source;
	}

	return source.substr(0, limit);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * concat two arrays
 * \param[in] source1 array one
 * \param[in] source2 array two
 * \return result array
 */
function libcore__array_merge(source1, source2)
{
	"use strict";

	if ((source1 instanceof Array) === false)
	{
		return [];
	}

	if ((source2 instanceof Array) === false)
	{
		return [];
	}

	return source1.concat(source2);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * crop array
 * \param[in] source source array
 * \param[in] limit length limit
 * \return result array
 */
function libcore__array_crop(source, limit)
{
	"use strict";

	if ((source instanceof Array) === false)
	{
		return [];
	}

	if (source.length < limit)
	{
		return source;
	}

	return source.slice(0, limit);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * expand array
 * \param[in] source source array
 * \param[in] limit length limit
 * \return result array
 */
function libcore__array_expand(source, limit)
{
	"use strict";

	if ((source instanceof Array) === false)
	{
		return [];
	}

	if (source.length === 0)
	{
		return [];
	}

	if (source.length >= limit)
	{
		return source;
	}


	var tmp = libcore.clone(source);

	for (;;)
	{
		if (tmp.length === limit) break;


		var min = 0;
		var max = source.length - 1;

		tmp.push(libcore.clone(source[libcore.rnd(min, max)]));
	}

	return tmp;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * set length array
 * \param[in] source source array
 * \param[in] limit length limit
 * \return result array
 */
function libcore__array_limit(source, limit)
{
	"use strict";

	if ((source instanceof Array) === false)
	{
		return [];
	}

	if (source.length > limit)
	{
		return libcore.array_crop(source, limit);
	}

	return libcore.array_expand(source, limit);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * remix array elements
 * \param[in] source source array
 * \return result array
 */
function libcore__array_remix(source)
{
	"use strict";

	if ((source instanceof Array) === false)
	{
		return [];
	}

	if (source.length === 0) return source;

	if (source.length === 1) return source;


	var target = libcore.clone(source);
	for (var i = target.length - 1; i > -1; i--)
	{
		var j = libcore.rnd(0, i);

		if (j !== i)
		{
			var item  = libcore.clone(target[i]);
			target[i] = libcore.clone(target[j]);
			target[j] = item;
		}
	}

/*
	var index_list = [];
	for (var i=0; i < source.length; i++)
	{
		index_list.push(i);
	}


	var target = [];
	for (;;)
	{
		if (index_list.length === 0) break;

		var index = libcore.rnd(0, index_list.length - 1);
		target.push(libcore.clone(source[index_list[index]]));

		index_list.splice(index, 1);
	}
*/

	return target;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * filter array elements
 * \param[in] source source array
 * \param[in] filter filter item
 * \param[in] flag_invert flag invert filtring
 * \param[in] flag_identity flag for enable hard identity
 * \return result array
 */
function libcore__array_filter(source, filter, flag_invert, flag_identity)
{
	"use strict";

	if ((source instanceof Array) === false)
	{
		return [];
	}


	if (typeof flag_invert !== 'boolean')
	{
		flag_invert = false;
	}


	var target = [];


	if ((filter instanceof Array) === false)
	{
		for (var i = 0; i < source.length; i++)
		{
			var flag_cmp = libcore.cmp(source[i], filter, flag_identity);

			if
			(
				((flag_cmp === true)  && (flag_invert === false)) ||
				((flag_cmp === false) && (flag_invert === true))
			)
			{
				target.push(source[i]);
			}
		}
	}
	else
	{
		for (var i = 0; i < source.length; i++)
		{
			for (var j = 0; j < filter.length; j++)
			{
				var flag_cmp = libcore.cmp(source[i], filter[j], flag_identity);

				if
				(
					((flag_cmp === true)  && (flag_invert === false)) ||
					((flag_cmp === false) && (flag_invert === true))
				)
				{
					target.push(source[i]);
				}
			}
		}
	}


	return target;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * draw json pretty
 * \param[in] source variable for print
 * \param[in] source_field variable name (not not required)
 * \param[in] flag_shift flag for more pretty view (not not required)
 * \param[in] tab inner variable
 * \param[in] max_width inner variable
 * \return result array
 */
function libcore__jdraw(source, source_field, flag_shift, tab, max_width)
{
	"use strict";

	function shift(flag_shift, cur, max)
	{
		if (flag_shift !== true) return ' ';

		var shift = '';
		for (var i=0; i < (max - cur + 1); i++)
		{
			shift += ' ';
		}
		return shift;
	}

	if (typeof source_field === 'undefined')
	{
		source_field = '';
	}

	if (typeof flag_shift === 'undefined')
	{
		flag_shift = false;
	}

	if (typeof tab === 'undefined')
	{
		tab = '';
	}

	if (typeof max_width === 'undefined')
	{
		max_width = 0;
	}

	if (typeof source === 'boolean')
	{
		var body = '';
		if (source_field !== '')
		{
			body += tab + '"' + source_field + '"' + shift(flag_shift, source_field.length, max_width) + ': ' + source;
			return body;
		}
		body += tab + source;
		return body;
	}

	if (typeof source === 'number')
	{
		var body = '';
		if (source_field !== '')
		{
			body += tab + '"' + source_field + '"' + shift(flag_shift, source_field.length, max_width) + ': ' + source;
			return body;
		}
		body += tab + source;
		return body;
	}

	if (typeof source === 'string')
	{
		var body = '';
		if (source_field !== '')
		{
			body += tab + '"' + source_field + '"' + shift(flag_shift, source_field.length, max_width) + ': "' + source + '"';
			return body;
		}
		body += tab + '"' + source + '"';
		return body;
	}

	if (source === null)
	{
		var body = '';
		if (source_field !== '')
		{
			body += tab + '"' + source_field + '"' + shift(flag_shift, source_field.length, max_width) + ': ' + source;
			return body;
		}
		body += tab + source;
		return body;
	}

	if (typeof source === 'undefined')
	{
		var body = '';
		if (source_field !== '')
		{
			body += tab + '"' + source_field + '"' + shift(flag_shift, source_field.length, max_width) + ': ' + source;
			return body;
		}
		body += tab + source;
		return body;
	}

	if (typeof source === 'function')
	{
		var body = '';
		if (source_field !== '')
		{
			body += tab + '"' + source_field + '"' + shift(flag_shift, source_field.length, max_width) + ': ' + source;
			return body;
		}
		body += tab + source;
		return body;
	}

	if ((source instanceof RegExp) === true)
	{
		var body = '';
		if (source_field !== '')
		{
			body += tab + '"' + source_field + '"' + shift(flag_shift, source_field.length, max_width) + ': ' + source;
			return body;
		}
		body += tab + source;
		return body;
	}

	if ((source instanceof Date) === true)
	{
		var body = '';
		if (source_field !== '')
		{
			body += tab + '"' + source_field + '"' + shift(flag_shift, source_field.length, max_width) + ': ' + source;
			return body;
		}
		body += tab + source;
		return body;
	}

	if ((source instanceof Array) === true)
	{
		var body = '';
		if (source_field !== '')
		{
			body += tab + '"' + source_field + '"' + shift(flag_shift, source_field.length, max_width) + ':' + "\n";
		}
		body += tab + "[\n";

		for (var i=0; i < source.length; i++)
		{
			body += libcore.jdraw(source[i], undefined, flag_shift, tab + "\t");

			if (i !== (source.length - 1))
			{
				body += ",\n";
			}
			else
			{
				body += "\n";
			}
		}

		body += tab + "]";
		return body;
	}

	if (typeof source === 'object')
	{
		var body = '';
		if (source_field !== '')
		{
			body += tab + '"' + source_field + '"' + shift(flag_shift, source_field.length, max_width) + ':' + "\n";
		}
		body += tab + "{\n";

		var max_width = 0;
		var field_list = [];
		for (source_field in source)
		{
			field_list.push(source_field);
			if (source_field.length > max_width)
			{
				max_width = source_field.length;
			}
		}

		for (var i=0; i < field_list.length; i++)
		{
			source_field = field_list[i];

			body += libcore.jdraw(source[source_field], source_field, flag_shift, tab + "\t", max_width);

			if (i !== (field_list.length - 1))
			{
				body += ",\n";
			}
			else
			{
				body += "\n";
			}
		}

		body += tab + "}";

		return body;
	}

	var body = '';
	body += 'ERROR[libcore.jdraw()]: not implementation type ' + typeof source;

	return body;
}
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

	xdate.setTime((unixtime * 1000) + (gmt_offset * 60 * 60 * 1000));


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

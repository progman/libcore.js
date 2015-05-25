//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// 0.1.9
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
	"uniq"          : libcore__uniq,
	"rnd"           : libcore__rnd,
	"str_crop"      : libcore__str_crop,
	"array_merge"   : libcore__array_merge,
	"array_crop"    : libcore__array_crop
};
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * show message on browser console
 * \param[in] msg message
 * \param[in] flag_enable turn on show
 */
function libcore__log(msg, flag_enable)
{
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


	if (typeof source === 'null')
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
			for (target_field in target)
			{
				var flag_found = false;
				for (source_field in source)
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
			for (source_field in source)
			{
				var flag_found = false;
				for (target_field in target)
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
function libcore__clone(source)
{
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


	if (typeof source === 'null')
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
		return source.slice(0);
	}


	if (typeof source === 'object')
	{
		var tmp = {};

		for (source_field in source)
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
 * uniq array
 * \param[in] input input array
 * \param[in] field_name field name if array of objects
 * \return uniq array
 */
function libcore__uniq(input, field_name)
{
	if ((input instanceof Array) === false)
	{
		return [];
	}


	var output = [];


	if (typeof field_name !== "string")
	{
		var input_free = libcore.clone(input); // отвязываем массив
		input_free.sort();

		var x_old = null;
		for (var i=0; i < input_free.length; i++)
		{
			var x = input_free[i];
			if (x !== x_old)
			{
				output.push(x);
				x_old = x;
			}
		}
	}
	else
	{
		var field_list = [];
		for (var i=0; i < input.length; i++)
		{
			field_list.push(input[i][field_name]);
		}
		field_list = libcore__uniq(field_list);

		for (var i=0; i < field_list.length; i++)
		{
			for (var j=0; j < input.length; j++)
			{
				if (input[j][field_name] === field_list[i])
				{
					output.push(input[j]);
					break;
				}
			}
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

	return Math.floor(Math.random() * (max - min + 1)) + min;
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

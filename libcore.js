//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// 0.1.4
// Alexey Potehin <gnuplanet@gmail.com>, http://www.gnuplanet.ru/doc/cv
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var libcore =
{
	"log"           : libcore__log,
	"get_unixtime"  : libcore__get_unixtime,
	"get_microtime" : libcore__get_microtime,
	"is_uint"       : libcore__is_uint,
	"is_sint"       : libcore__is_sint,
	"min"           : libcore__min,
	"max"           : libcore__max,
	"clone"         : libcore__clone,
	"uniq"          : libcore__uniq
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
 * get current unixtime
 * \return unixtime
 */
function libcore__get_unixtime()
{
	var unixtime = (new Date().getTime() * 0.001)|0;

	return unixtime;
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


	libcore.log('libcore.clone(): strange');
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

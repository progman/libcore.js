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

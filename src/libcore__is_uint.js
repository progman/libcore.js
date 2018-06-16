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

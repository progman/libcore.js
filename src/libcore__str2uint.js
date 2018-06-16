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

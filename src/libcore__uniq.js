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

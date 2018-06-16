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
			break;
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

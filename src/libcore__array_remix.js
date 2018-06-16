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

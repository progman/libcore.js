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
//			tmp.__proto__ = source.__proto__;
//			tmp.__proto__ = Object.getPrototypeOf(source);

			var tmp = Object.create(Object.getPrototypeOf(source));
			for (var source_field in source)
			{
				if (source.hasOwnProperty(source_field))
				{
					tmp[source_field] = libcore.clone(source[source_field]);
				}
			}
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

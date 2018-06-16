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

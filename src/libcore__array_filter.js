//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * filter array elements
 * \param[in] source source array
 * \param[in] filter filter item
 * \param[in] flag_invert flag invert filtring
 * \param[in] flag_identity flag for enable hard identity
 * \return result array
 */
function libcore__array_filter(source, filter, flag_invert, flag_identity)
{
	"use strict";

	if ((source instanceof Array) === false)
	{
		return [];
	}


	if (typeof flag_invert !== 'boolean')
	{
		flag_invert = false;
	}


	var target = [];


	if ((filter instanceof Array) === false)
	{
		for (var i = 0; i < source.length; i++)
		{
			var flag_cmp = libcore.cmp(source[i], filter, flag_identity);

			if
			(
				((flag_cmp === true)  && (flag_invert === false)) ||
				((flag_cmp === false) && (flag_invert === true))
			)
			{
				target.push(source[i]);
			}
		}
	}
	else
	{
		for (var i = 0; i < source.length; i++)
		{
			for (var j = 0; j < filter.length; j++)
			{
				var flag_cmp = libcore.cmp(source[i], filter[j], flag_identity);

				if
				(
					((flag_cmp === true)  && (flag_invert === false)) ||
					((flag_cmp === false) && (flag_invert === true))
				)
				{
					target.push(source[i]);
				}
			}
		}
	}


	return target;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

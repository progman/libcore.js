//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/**
 * get rnd number from min to max
 * \param[in] min minimal number
 * \param[in] max maximal number
 * \return rnd number from min to max
 */
function libcore__rnd(min, max)
{
	"use strict";

	if (min === max)
	{
		return min;
	}

	if (max < min)
	{
		var tmp = min;
		min = max;
		max = tmp;
	}

	if ((Math.floor(min) !== min) || (Math.floor(max) !== max))
	{
		return Math.random() * (max - min) + min;
	}

	var rnd = Math.floor(Math.random() * (max - min + 1)) + min;

	return (rnd > max) ? max : rnd;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
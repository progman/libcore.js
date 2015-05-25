//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// 0.1.6
// Alexey Potehin <gnuplanet@gmail.com>, http://www.gnuplanet.ru/doc/cv
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var fs = require('fs');
var vm = require('vm');

function include(path)
{
	var code = fs.readFileSync(path, 'utf-8');
	vm.runInThisContext(code, path);
}

include('./libcore.js');
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.get_microtime(), libcore.get_unixtime()
function test0001()
{
	var old_microtime = libcore.get_microtime();
	if (typeof old_microtime !== 'number') { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }


	var old_time = libcore.get_unixtime();
	if (typeof old_time !== 'number') { console.log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }


	var cur_date = new Date();
	if ((cur_date instanceof Date) === false) { console.log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }


	var cur_microtime = cur_date.getTime();
	if (typeof cur_microtime !== 'number') { console.log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }


	var cur_time = cur_microtime / 1000;
	if (typeof cur_time !== 'number') { console.log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }


	if ((old_time + 2) < cur_time) { console.log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (cur_time < old_time) { console.log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }


	if ((old_microtime + 2000) < cur_microtime) { console.log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (cur_microtime < old_microtime) { console.log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.is_uint(), libcore.is_sint()
function test0002()
{
	if (libcore.is_uint(-1)    == true)  { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.is_uint(0)     == false) { console.log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (libcore.is_uint(1)     == false) { console.log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (libcore.is_uint(+1)    == false) { console.log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }

	if (libcore.is_uint("-1-") == true)  { console.log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }
	if (libcore.is_uint("-1")  == true)  { console.log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (libcore.is_uint("0")   == false) { console.log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (libcore.is_uint("1")   == false) { console.log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (libcore.is_uint("+1")  == false) { console.log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }

	if (libcore.is_sint("-1-") == true)  { console.log('ERROR[' + arguments.callee.name + '()]: step010'); return false; }
	if (libcore.is_sint("-1")  == false) { console.log('ERROR[' + arguments.callee.name + '()]: step011'); return false; }
	if (libcore.is_sint("0")   == false) { console.log('ERROR[' + arguments.callee.name + '()]: step012'); return false; }
	if (libcore.is_sint("1")   == false) { console.log('ERROR[' + arguments.callee.name + '()]: step013'); return false; }
	if (libcore.is_sint("+1")  == false) { console.log('ERROR[' + arguments.callee.name + '()]: step014'); return false; }

	if (libcore.is_sint(-1)    == false) { console.log('ERROR[' + arguments.callee.name + '()]: step015'); return false; }
	if (libcore.is_sint(0)     == false) { console.log('ERROR[' + arguments.callee.name + '()]: step016'); return false; }
	if (libcore.is_sint(1)     == false) { console.log('ERROR[' + arguments.callee.name + '()]: step017'); return false; }
	if (libcore.is_sint(+1)    == false) { console.log('ERROR[' + arguments.callee.name + '()]: step018'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.str2uint(), libcore.str2sint()
function test0003()
{
	if (libcore.str2uint('-1', 5)  !== 5)  { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.str2uint('-1')     !== 0)  { console.log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (libcore.str2uint('-1-')    !== 0)  { console.log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (libcore.str2uint('0')      !== 0)  { console.log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }
	if (libcore.str2uint('1')      !== 1)  { console.log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }

	if (libcore.str2sint('-1')     !== -1) { console.log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (libcore.str2sint('-1-')    !== 0)  { console.log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (libcore.str2sint('-1-', 5) !== 5)  { console.log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (libcore.str2sint('0')      !== 0)  { console.log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }
	if (libcore.str2sint('1')      !== 1)  { console.log('ERROR[' + arguments.callee.name + '()]: step010'); return false; }

	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.min(), libcore.max()
function test0004()
{
	if (libcore.min(-10, 10) != -10)  { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.min(10, 20)  !=  10)  { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }


	if (libcore.max(-10, 10) !=  10)  { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.max(10, 20)  !=  20)  { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.cmp()
function test0005()
{
	var o1 = { "a": 1, "b": 2 }; //, s1 = JSON.stringify(o1),
	var o2 = { "b": 2, "a": 1 }; //, s2 = JSON.stringify(o2);
	var o3 = { "b": 2 };

	if (libcore.cmp(o1, o2, true)  == false) { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.cmp(o1, o2, false) == false) { console.log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }

	if (libcore.cmp(o1, o3, false) == false) { console.log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (libcore.cmp(o2, o3, false) == false) { console.log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }

	if (libcore.cmp(o1, o3, true)  == true)  { console.log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }
	if (libcore.cmp(o2, o3, true)  == true)  { console.log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }

	var f1 = function() { var z = 0; };
	var f2 = f1;
	var f3 = function() { var z = 0; };
	var f4 = function() { var a = 0; };

	if (libcore.cmp(f1, f2)  == false)  { console.log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (libcore.cmp(f1, f3)  == false)  { console.log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (libcore.cmp(f1, f4)  == true)   { console.log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }


	var d1 = new Date("July 1, 1999");
	var d2 = new Date("July 2, 1999");

	if (libcore.cmp(d1, d1)  == false)  { console.log('ERROR[' + arguments.callee.name + '()]: step010'); return false; }
	if (libcore.cmp(d1, d2)  == true)   { console.log('ERROR[' + arguments.callee.name + '()]: step011'); return false; }

	var d3 = new Date();
	var d4 = new Date(d3);

	if (libcore.cmp(d3, d3)  == false)  { console.log('ERROR[' + arguments.callee.name + '()]: step012'); return false; }
	if (libcore.cmp(d3, d4)  == false)  { console.log('ERROR[' + arguments.callee.name + '()]: step013'); return false; }


	var ox1 = { "a" : 1, "b" : [0, 1, 2] };
	var ox2 = { "b" : [0, 1, 2], "a" : 1 };
	var ox3 = { "b" : [0, 1, 3], "a" : 1 };
	var ox4 = { "a" : 1, "c" : 7, "b" : [0, 1, 3] };

	if (libcore.cmp(ox1, ox2, false) == false)  { console.log('ERROR[' + arguments.callee.name + '()]: step014'); return false; }
	if (libcore.cmp(ox1, ox3, false) == true)   { console.log('ERROR[' + arguments.callee.name + '()]: step015'); return false; }
	if (libcore.cmp(ox4, ox3, false) == false)  { console.log('ERROR[' + arguments.callee.name + '()]: step016'); return false; }
	if (libcore.cmp(ox4, ox3, true)  == true)   { console.log('ERROR[' + arguments.callee.name + '()]: step017'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.clone()
function test0006()
{
	var source1 =
	{
		"a" :
		{
			"a1" : [ 1, 2, 3]
		},
		"b" :
		[
			{
				"b1" : false,
				"b2" : 4,
				"b3" : "wow",
				"b4" : null,
				"b5" : undefined,
				"b6" : function() {},
				"b7" : /^foo(bar)?$/i,
				"b8" : new Date()
			}
		]
	};
	var target1 = libcore.clone(source1);
	if (libcore.cmp(source1, target1, true) !== true)  { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	target1.a.a1[0] = 4;
	if (libcore.cmp(source1, target1, true) !== false) { console.log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }


	var source2 = true;
	var target2 = libcore.clone(source2);
	if (libcore.cmp(source2, target2, true) !== true)  { console.log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	target2 = false;
	if (libcore.cmp(source2, target2, true) !== false) { console.log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }


	var source3 = 1;
	var target3 = libcore.clone(source3);
	if (libcore.cmp(source3, target3, true) !== true)  { console.log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }
	target3 = 0;
	if (libcore.cmp(source3, target3, true) !== false) { console.log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }


	var source4 = "wow";
	var target4 = libcore.clone(source4);
	if (libcore.cmp(source4, target4, true) !== true)  { console.log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	target4 = "owo";
	if (libcore.cmp(source4, target4, true) !== false) { console.log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }


	var source5 = null;
	var target5 = libcore.clone(source5);
	if (libcore.cmp(source5, target5, true) !== true)  { console.log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }
	target5 = "";
	if (libcore.cmp(source5, target5, true) !== false) { console.log('ERROR[' + arguments.callee.name + '()]: step010'); return false; }


	var source6 = undefined;
	var target6 = libcore.clone(source6);
	if (libcore.cmp(source6, target6, true) !== true)  { console.log('ERROR[' + arguments.callee.name + '()]: step011'); return false; }
	target6 = "";
	if (libcore.cmp(source6, target6, true) !== false) { console.log('ERROR[' + arguments.callee.name + '()]: step012'); return false; }


	var source7 = function() { return 1; };
	var target7 = libcore.clone(source7);
	if (libcore.cmp(source7, target7, true) !== true)  { console.log('ERROR[' + arguments.callee.name + '()]: step013'); return false; }
	target7 = function() { return 2; };
	if (libcore.cmp(source7, target7, true) !== false) { console.log('ERROR[' + arguments.callee.name + '()]: step014'); return false; }


	var source8 = /^foo(bar)?$/i;
	var target8 = libcore.clone(source8);
	if (libcore.cmp(source8, target8, true) !== true)  { console.log('ERROR[' + arguments.callee.name + '()]: step015'); return false; }
	target8 = /^foo(too)?$/i;
	if (libcore.cmp(source8, target8, true) !== false) { console.log('ERROR[' + arguments.callee.name + '()]: step016'); return false; }


	var source9 = new Date(2014, 0, 1);
	var target9 = libcore.clone(source9);
	if (libcore.cmp(source9, target9, true) !== true)  { console.log('ERROR[' + arguments.callee.name + '()]: step017'); return false; }
	target9 = new Date(2014, 0, 2);
	if (libcore.cmp(source9, target9, true) !== false) { console.log('ERROR[' + arguments.callee.name + '()]: step018'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.uniq(), number array
function test0007()
{
	var x = [];
	x.push(1);
	x.push(2);
	x.push(2);
	x.push(3);

	var y = libcore.uniq(x);

	if (x.length != 4) { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (x[0] != 1) { console.log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (x[1] != 2) { console.log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (x[2] != 2) { console.log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }
	if (x[3] != 3) { console.log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }

	if (y.length != 3) { console.log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (y[0] != 1) { console.log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (y[1] != 2) { console.log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (y[2] != 3) { console.log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.uniq(), string array
function test0008()
{
	var x = [];
	x.push('мама');
	x.push('мыла');
	x.push('мыла');
	x.push('раму');

	var y = libcore.uniq(x);

	if (x.length != 4) { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (x[0] != 'мама') { console.log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (x[1] != 'мыла') { console.log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (x[2] != 'мыла') { console.log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }
	if (x[3] != 'раму') { console.log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }

	if (y.length != 3) { console.log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (y[0] != 'мама') { console.log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (y[1] != 'мыла') { console.log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (y[2] != 'раму') { console.log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.uniq()
function test0009()
{
	var x = [];
	x.push({ "id" : 1, "value" : "a" });
	x.push({ "id" : 2, "value" : "b" });
	x.push({ "id" : 2, "value" : "b" });
	x.push({ "id" : 3, "value" : "c" });

	var y = libcore.uniq(x, 'id');
//	console.log(JSON.stringify(y));

	if (x.length != 4) { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (x[0].id != 1) { console.log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (x[1].id != 2) { console.log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (x[2].id != 2) { console.log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }
	if (x[3].id != 3) { console.log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }

	if (y.length != 3) { console.log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (y[0].id != 1) { console.log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (y[1].id != 2) { console.log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (y[2].id != 3) { console.log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.rnd()
function test0010()
{
	function test(min, max)
	{
		if (max < min)
		{
			var tmp = min;
			min = max;
			max = tmp;
		}

		if ((Math.floor(min) !== min) || (Math.floor(max) !== max))
		{
			var x = libcore.rnd(min, max);

			if (x < min)
			{
				console.log("ERROR: x < min, " + x);
				return false;
			}

			if (x > max)
			{
				console.log("ERROR: x > max, " + x);
				return false;
			}

			return true;
		}

		var flag1 = false;
		var flag2 = false;
		var flag3 = false;


		if (min == max)
		{
			flag3 = true;
		}

		if ((min + 1) == max)
		{
			flag3 = true;
		}

		for (;;)
		{
			if ((flag1 !== false)  && (flag2 !== false)  && (flag3 !== false))
			{
				break;
			}


			var x = libcore.rnd(min, max);

			if (x < min)
			{
				console.log("ERROR: x < min, " + x);
				return false;
			}

			if (x > max)
			{
				console.log("ERROR: x > max, " + x);
				return false;
			}

			if (x == min)
			{
				flag1 = true;
			}

			if (x == max)
			{
				flag2 = true;
			}

			if ((x > min) && (x < max))
			{
				flag3 = true;
			}

		}

		return true;
	}


	if (test(-15, -10) !== true) { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }

	if (test(-15, 10) !== true) { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }

	if (test(15, 10) !== true) { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }

	if (test(10, 10) !== true) { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }

	if (test(10, 15) !== true) { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }

	if (test(1.1, 1.3) !== true) { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }

	if (test(1.3, 1.1) !== true) { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.str_crop()
function test0011()
{
	var a = "bird ";

	var b = libcore.str_crop(a, 4);

	if (b !== "bird")  { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (a !== "bird ") { console.log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }


	var b = libcore.str_crop(a, 5);

	if (b !== "bird ") { console.log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (a !== "bird ") { console.log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }


	if (libcore.str_crop("123", 4) != "123") { console.log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }
	if (libcore.str_crop("123", 3) != "123") { console.log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (libcore.str_crop("123", 2) != "12")  { console.log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (libcore.str_crop("123", 1) != "1")   { console.log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (libcore.str_crop("123", 0) != "")    { console.log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function do_it()
{
	if (test0001() == false) { return false; }
	if (test0002() == false) { return false; }
	if (test0003() == false) { return false; }
	if (test0004() == false) { return false; }
	if (test0005() == false) { return false; }
	if (test0006() == false) { return false; }
	if (test0007() == false) { return false; }
	if (test0008() == false) { return false; }
	if (test0009() == false) { return false; }
	if (test0010() == false) { return false; }
	if (test0011() == false) { return false; }

	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
if (do_it() == true)
{
	console.log('ok, test passed');
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

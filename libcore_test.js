//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// 0.2.0
// Alexey Potehin <gnuplanet@gmail.com>, http://www.gnuplanet.ru/doc/cv
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function test_log(msg)
{
	console.log(msg);

	if (typeof alert === 'function')
	{
		alert(msg);
	}
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.get_microtime(), libcore.get_unixtime()
function test0001()
{
	var old_microtime = libcore.get_microtime();
	if (typeof old_microtime !== 'number') { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }


	var old_time = libcore.get_unixtime();
	if (typeof old_time !== 'number') { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }


	var cur_date = new Date();
	if ((cur_date instanceof Date) === false) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }


	var cur_microtime = cur_date.getTime();
	if (typeof cur_microtime !== 'number') { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }


	var cur_time = cur_microtime / 1000;
	if (typeof cur_time !== 'number') { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }


	if ((old_time + 2) < cur_time) { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (cur_time < old_time) { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }


	if ((old_microtime + 2000) < cur_microtime) { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (cur_microtime < old_microtime) { test_log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.is_uint(), libcore.is_sint()
function test0002()
{
	if (libcore.is_uint(-1)    === true)  { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.is_uint(0)     === false) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (libcore.is_uint(1)     === false) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (libcore.is_uint(+1)    === false) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }

	if (libcore.is_uint("-1-") === true)  { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }
	if (libcore.is_uint("-1")  === true)  { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (libcore.is_uint("0")   === false) { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (libcore.is_uint("1")   === false) { test_log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (libcore.is_uint("+1")  === false) { test_log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }

	if (libcore.is_sint("-1-") === true)  { test_log('ERROR[' + arguments.callee.name + '()]: step010'); return false; }
	if (libcore.is_sint("-1")  === false) { test_log('ERROR[' + arguments.callee.name + '()]: step011'); return false; }
	if (libcore.is_sint("0")   === false) { test_log('ERROR[' + arguments.callee.name + '()]: step012'); return false; }
	if (libcore.is_sint("1")   === false) { test_log('ERROR[' + arguments.callee.name + '()]: step013'); return false; }
	if (libcore.is_sint("+1")  === false) { test_log('ERROR[' + arguments.callee.name + '()]: step014'); return false; }

	if (libcore.is_sint(-1)    === false) { test_log('ERROR[' + arguments.callee.name + '()]: step015'); return false; }
	if (libcore.is_sint(0)     === false) { test_log('ERROR[' + arguments.callee.name + '()]: step016'); return false; }
	if (libcore.is_sint(1)     === false) { test_log('ERROR[' + arguments.callee.name + '()]: step017'); return false; }
	if (libcore.is_sint(+1)    === false) { test_log('ERROR[' + arguments.callee.name + '()]: step018'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.str2uint(), libcore.str2sint()
function test0003()
{
	if (libcore.str2uint('-1', 5)  !== 5)  { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.str2uint('-1')     !== 0)  { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (libcore.str2uint('-1-')    !== 0)  { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (libcore.str2uint('0')      !== 0)  { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }
	if (libcore.str2uint('1')      !== 1)  { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }

	if (libcore.str2sint('-1')     !== -1) { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (libcore.str2sint('-1-')    !== 0)  { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (libcore.str2sint('-1-', 5) !== 5)  { test_log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (libcore.str2sint('0')      !== 0)  { test_log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }
	if (libcore.str2sint('1')      !== 1)  { test_log('ERROR[' + arguments.callee.name + '()]: step010'); return false; }

	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.min(), libcore.max()
function test0004()
{
	if (libcore.min(-10, 10) != -10)  { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.min(10, 20)  !=  10)  { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }


	if (libcore.max(-10, 10) !=  10)  { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.max(10, 20)  !=  20)  { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.cmp()
function test0005()
{
	var o1 = { "a": 1, "b": 2 }; //, s1 = JSON.stringify(o1),
	var o2 = { "b": 2, "a": 1 }; //, s2 = JSON.stringify(o2);
	var o3 = { "b": 2 };

	if (libcore.cmp(o1, o2, true)  === false) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.cmp(o1, o2, false) === false) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }

	if (libcore.cmp(o1, o3, false) === false) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (libcore.cmp(o2, o3, false) === false) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }

	if (libcore.cmp(o1, o3, true)  === true)  { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }
	if (libcore.cmp(o2, o3, true)  === true)  { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }

	var f1 = function() { var z = 0; };
	var f2 = f1;
	var f3 = function() { var z = 0; };
	var f4 = function() { var a = 0; };

	if (libcore.cmp(f1, f2)  === false)  { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (libcore.cmp(f1, f3)  === false)  { test_log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (libcore.cmp(f1, f4)  === true)   { test_log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }


	var d1 = new Date("July 1, 1999");
	var d2 = new Date("July 2, 1999");

	if (libcore.cmp(d1, d1)  === false)  { test_log('ERROR[' + arguments.callee.name + '()]: step010'); return false; }
	if (libcore.cmp(d1, d2)  === true)   { test_log('ERROR[' + arguments.callee.name + '()]: step011'); return false; }

	var d3 = new Date();
	var d4 = new Date(d3.getTime());

	if (libcore.cmp(d3, d3)  === false)  { test_log('ERROR[' + arguments.callee.name + '()]: step012'); return false; }
	if (libcore.cmp(d3, d4)  === false)  { test_log('ERROR[' + arguments.callee.name + '()]: step013'); return false; }


	var ox1 = { "a" : 1, "b" : [0, 1, 2] };
	var ox2 = { "b" : [0, 1, 2], "a" : 1 };
	var ox3 = { "b" : [0, 1, 3], "a" : 1 };
	var ox4 = { "a" : 1, "c" : 7, "b" : [0, 1, 3] };

	if (libcore.cmp(ox1, ox2, false) === false)  { test_log('ERROR[' + arguments.callee.name + '()]: step014'); return false; }
	if (libcore.cmp(ox1, ox3, false) === true)   { test_log('ERROR[' + arguments.callee.name + '()]: step015'); return false; }
	if (libcore.cmp(ox4, ox3, false) === false)  { test_log('ERROR[' + arguments.callee.name + '()]: step016'); return false; }
	if (libcore.cmp(ox4, ox3, true)  === true)   { test_log('ERROR[' + arguments.callee.name + '()]: step017'); return false; }


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
	if (libcore.cmp(source1, target1, true) !== true)  { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	target1.a.a1[0] = 4;
	if (libcore.cmp(source1, target1, true) !== false) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }


	var source2 = true;
	var target2 = libcore.clone(source2);
	if (libcore.cmp(source2, target2, true) !== true)  { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	target2 = false;
	if (libcore.cmp(source2, target2, true) !== false) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }


	var source3 = 1;
	var target3 = libcore.clone(source3);
	if (libcore.cmp(source3, target3, true) !== true)  { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }
	target3 = 0;
	if (libcore.cmp(source3, target3, true) !== false) { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }


	var source4 = "wow";
	var target4 = libcore.clone(source4);
	if (libcore.cmp(source4, target4, true) !== true)  { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	target4 = "owo";
	if (libcore.cmp(source4, target4, true) !== false) { test_log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }


	var source5 = null;
	var target5 = libcore.clone(source5);
	if (libcore.cmp(source5, target5, true) !== true)  { test_log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }
	target5 = "";
	if (libcore.cmp(source5, target5, true) !== false) { test_log('ERROR[' + arguments.callee.name + '()]: step010'); return false; }


	var source6 = undefined;
	var target6 = libcore.clone(source6);
	if (libcore.cmp(source6, target6, true) !== true)  { test_log('ERROR[' + arguments.callee.name + '()]: step011'); return false; }
	target6 = "";
	if (libcore.cmp(source6, target6, true) !== false) { test_log('ERROR[' + arguments.callee.name + '()]: step012'); return false; }


	var source7 = function() { return 1; };
	var target7 = libcore.clone(source7);
	if (libcore.cmp(source7, target7, true) !== true)  { test_log('ERROR[' + arguments.callee.name + '()]: step013'); return false; }
	target7 = function() { return 2; };
	if (libcore.cmp(source7, target7, true) !== false) { test_log('ERROR[' + arguments.callee.name + '()]: step014'); return false; }


	var source8 = /^foo(bar)?$/i;
	var target8 = libcore.clone(source8);
	if (libcore.cmp(source8, target8, true) !== true)  { test_log('ERROR[' + arguments.callee.name + '()]: step015'); return false; }
	target8 = /^foo(too)?$/i;
	if (libcore.cmp(source8, target8, true) !== false) { test_log('ERROR[' + arguments.callee.name + '()]: step016'); return false; }


	var source9 = new Date(2014, 0, 1);
	var target9 = libcore.clone(source9);
	if (libcore.cmp(source9, target9, true) !== true)  { test_log('ERROR[' + arguments.callee.name + '()]: step017'); return false; }
	target9 = new Date(2014, 0, 2);
	if (libcore.cmp(source9, target9, true) !== false) { test_log('ERROR[' + arguments.callee.name + '()]: step018'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.sort()
function test0007()
{
	var a = [];
	a.push({ "id" : 5, "val" : "5" });
	a.push({ "id" : 7, "val" : "7" });
	a.push({ "id" : 8, "val" : "8" });
	a.push({ "id" : 1, "val" : "1" });
	a.push({ "id" : 9, "val" : "9" });
	a.push({ "id" : 3, "val" : "3" });
	a.push({ "id" : 2, "val" : "2" });
	a.push({ "id" : 4, "val" : "4" });
	a.push({ "id" : 6, "val" : "6" });
	a.push({ "id" : 5, "val" : "5 too" });


	var b = [];
	b.push({ "id" : 1, "val" : "1" });
	b.push({ "id" : 2, "val" : "2" });
	b.push({ "id" : 3, "val" : "3" });
	b.push({ "id" : 4, "val" : "4" });
	b.push({ "id" : 5, "val" : "5" });
	b.push({ "id" : 5, "val" : "5 too" });
	b.push({ "id" : 6, "val" : "6" });
	b.push({ "id" : 7, "val" : "7" });
	b.push({ "id" : 8, "val" : "8" });
	b.push({ "id" : 9, "val" : "9" });


	var x = libcore.sort(a, "id");


	if (libcore.cmp(x, b, true) === false)
	{
		test_log('ERROR[' + arguments.callee.name + '()]: step001');
		return false;
	}


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.uniq(), number array
function test0008()
{
	var x = [];
	x.push(1);
	x.push(2);
	x.push(2);
	x.push(3);

	var y = libcore.uniq(x);

	if (x.length != 4) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (x[0] != 1) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (x[1] != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (x[2] != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }
	if (x[3] != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }

	if (y.length != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (y[0] != 1) { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (y[1] != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (y[2] != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.uniq(), string array
function test0009()
{
	var x = [];
	x.push('мама');
	x.push('мыла');
	x.push('мыла');
	x.push('раму');

	var y = libcore.uniq(x);

	if (x.length != 4) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (x[0] != 'мама') { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (x[1] != 'мыла') { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (x[2] != 'мыла') { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }
	if (x[3] != 'раму') { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }

	if (y.length != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (y[0] != 'мама') { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (y[1] != 'мыла') { test_log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (y[2] != 'раму') { test_log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.uniq()
function test0010()
{
	var x = [];
	x.push({ "id" : 1, "value" : "a" });
	x.push({ "id" : 2, "value" : "b" });
	x.push({ "id" : 2, "value" : "b" });
	x.push({ "id" : 3, "value" : "c" });

	var y = libcore.uniq(x, 'id');
//	test_log(JSON.stringify(y));

	if (x.length != 4) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (x[0].id != 1) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (x[1].id != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (x[2].id != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }
	if (x[3].id != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }

	if (y.length != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (y[0].id != 1) { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (y[1].id != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (y[2].id != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.rnd()
function test0011()
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
				test_log("ERROR: x < min, " + x);
				return false;
			}

			if (x > max)
			{
				test_log("ERROR: x > max, " + x);
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
				test_log("ERROR: x < min, " + x);
				return false;
			}

			if (x > max)
			{
				test_log("ERROR: x > max, " + x);
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


	if (test(-15, -10) !== true) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }

	if (test(-15, 10) !== true) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }

	if (test(15, 10) !== true) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }

	if (test(10, 10) !== true) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }

	if (test(10, 15) !== true) { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }

	if (test(1.1, 1.3) !== true) { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }

	if (test(1.3, 1.1) !== true) { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }


	var max = 1000;
	for (var i=0; i < (max + 1); i++)
	{
		for ( ; ; )
		{
			var x = libcore.rnd(0, max);
			if (x == i) break;

			if (x == (max + 1))
			{
				test_log('ERROR[' + arguments.callee.name + '()]: step008'); return false;
			}
		}
	}


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.str_crop()
function test0012()
{
	var a = "bird ";

	var b = libcore.str_crop(a, 4);

	if (b !== "bird")  { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (a !== "bird ") { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }


	var b = libcore.str_crop(a, 5);

	if (b !== "bird ") { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (a !== "bird ") { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }


	if (libcore.str_crop("123", 4) != "123") { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }
	if (libcore.str_crop("123", 3) != "123") { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (libcore.str_crop("123", 2) != "12")  { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (libcore.str_crop("123", 1) != "1")   { test_log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (libcore.str_crop("123", 0) != "")    { test_log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.array_merge()
function test0013()
{
	var source1 = [];
	var source2 = [];

	source1.push(1);
	source1.push(2);
	source2.push(3);
	source2.push(4);
	source2.push(5);

	var target = libcore.array_merge(source1, source2);

	if (target.length != 5) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }

	source1[0] = 6;
	source2[0] = 7;

	if (target[0] != 1) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (target[1] != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (target[2] != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }
	if (target[3] != 4) { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }
	if (target[4] != 5) { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.array_crop()
function test0014()
{
	var tmp = [];
	tmp.push(1);
	tmp.push(2);
	tmp.push(3);
	tmp.push(4);
	tmp.push(5);
	tmp.push(6);
	tmp.push(7);

	var z = libcore.array_crop(tmp, 3);

	if (z.length != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (z[0] != 1) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (z[1] != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (z[2] != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.array_expand()
function test0015()
{
	var a = [];
	var b = libcore.array_expand(a, 2);

	if ((b instanceof Array) === false) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (b.length != 0) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }


	var x = [];
	x.push(1);
	var y = libcore.array_expand(x, 3);

	if ((y instanceof Array) === false) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (y.length != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }


	if (y[0] != 1) { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }
	if (y[1] != 1) { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (y[2] != 1) { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.array_limit()
function test0016()
{
	var a = [];
	var b = libcore.array_limit(a, 2);

	if ((b instanceof Array) === false) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (b.length != 0) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }


	var i = [];
	i.push(1);
	var j = libcore.array_limit(i, 2);

	if ((j instanceof Array) === false) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (j.length != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }


	var x = [];
	x.push(1);
	x.push(2);
	x.push(3);
	var y = libcore.array_limit(x, 2);

	if ((y instanceof Array) === false) { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }
	if (y.length != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }

	if (x[0] != 1) { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (x[1] != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.array_remix()
function test0017()
{
	var x = [];
	x.push(1);
	x.push(2);


	var count = 0;
	var flag1 = false;
	var flag2 = false;

	for (;;)
	{
		var y = libcore.array_remix(x);

		if ((y instanceof Array) === false) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
		if (y.length != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
		if ((x[0] != 1) || (x[1] != 2)) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }


		if ((y[0] === 1) && (y[1] === 2))
		{
			flag1 = true;
		}

		if ((y[0] === 2) && (y[1] === 1))
		{
			flag2 = true;
		}

		if ((flag1 === true) && (flag2 === true)) break;

		count++;
		if (count === 1000) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }
	}


	var a = [];

	for (var i=0; i < 1000; i++)
	{
		a.push(libcore.rnd(0, 255));
	}

	var b = libcore.array_remix(a);


	if (libcore.cmp(a, b, true) === true)
	{
		test_log('ERROR[' + arguments.callee.name + '()]: step005');
		return false;
	}


	var a_sort = libcore.sort(a);
	var b_sort = libcore.sort(b);


	if (libcore.cmp(a_sort, b_sort, true) === false)
	{
		test_log('ERROR[' + arguments.callee.name + '()]: step006');
		return false;
	}


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.array_filter()
function test0018()
{
	var source1 = [];
	source1.push(1);
	source1.push(666);
	source1.push(2);
	source1.push(666);
	source1.push(666);
	source1.push(3);
	source1.push(666);
	source1.push(666);
	source1.push(666);

	var target1 = libcore.array_filter(source1, 666, true, false);

	if (target1.length != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }

	if (target1[0] != 1) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }
	if (target1[1] != 2) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }
	if (target1[2] != 3) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }


	var source2 = [];
	source2.push({ "id" : 1,   "value" : "x1"  });
	source2.push({ "id" : 2,   "value" : "x2"  });
	source2.push({ "id" : 666, "value" : "666" });
	source2.push({ "id" : 666, "value" : "666" });
	source2.push({ "id" : 3,   "value" : "x3"  });
	source2.push({ "id" : 666, "value" : "666" });
	source2.push({ "id" : 666, "value" : "666" });
	source2.push({ "id" : 666, "value" : "666" });
	source2.push({ "id" : 666, "value" : "777" });

	var target2 = libcore.array_filter(source2, { "id" : 666, "value" : "666" }, true, false);

	if (target2.length != 4)  { test_log('ERROR[' + arguments.callee.name + '()]: step005'); return false; }
	if (target2[0].id != 1)   { test_log('ERROR[' + arguments.callee.name + '()]: step006'); return false; }
	if (target2[1].id != 2)   { test_log('ERROR[' + arguments.callee.name + '()]: step007'); return false; }
	if (target2[2].id != 3)   { test_log('ERROR[' + arguments.callee.name + '()]: step008'); return false; }
	if (target2[3].id != 666) { test_log('ERROR[' + arguments.callee.name + '()]: step009'); return false; }


	var target3 = libcore.array_filter(source2, { "id" : 666 }, true, false);

	if (target3.length != 3)  { test_log('ERROR[' + arguments.callee.name + '()]: step010'); return false; }

	if (target3[0].id != 1)   { test_log('ERROR[' + arguments.callee.name + '()]: step011'); return false; }
	if (target3[1].id != 2)   { test_log('ERROR[' + arguments.callee.name + '()]: step012'); return false; }
	if (target3[2].id != 3)   { test_log('ERROR[' + arguments.callee.name + '()]: step013'); return false; }


	var target4 = libcore.array_filter(source2, { "id" : 666 }, true, true);

	if (target4.length != 9)  { test_log('ERROR[' + arguments.callee.name + '()]: step014'); return false; }


	var target5 = libcore.array_filter(source2, { "value" : "777" }, true, true);

	if (target5.length != 9)  { test_log('ERROR[' + arguments.callee.name + '()]: step015'); return false; }


	var target6 = libcore.array_filter(source2, { "value" : "777" }, true, false);

	if (target6.length != 8)  { test_log('ERROR[' + arguments.callee.name + '()]: step016'); return false; }


	var target7 = libcore.array_filter(source2, { "value" : 777 }, true, false);

	if (target7.length != 9)  { test_log('ERROR[' + arguments.callee.name + '()]: step017'); return false; }


	var target8 = libcore.array_filter(source2, { "value" : "777" }, false, false);

	if (target8.length != 1)  { test_log('ERROR[' + arguments.callee.name + '()]: step018'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.jdraw()
function test0019()
{
	var data = { "a": "str", "very_long_name": true, "c" : 2, "d" : null, "e" : [ "str", false, 0, null ], "f" : { "g" : [ 5, 6, 7 ], "real_very_long_name" : "str" } };

	var body1 = libcore.jdraw(data, '', false);
	var body2 = libcore.jdraw(data, '', true);

	var res1 = '{\n\
	"a" : "str",\n\
	"very_long_name" : true,\n\
	"c" : 2,\n\
	"d" : null,\n\
	"e" :\n\
	[\n\
		"str",\n\
		false,\n\
		0,\n\
		null\n\
	],\n\
	"f" :\n\
	{\n\
		"g" :\n\
		[\n\
			5,\n\
			6,\n\
			7\n\
		],\n\
		"real_very_long_name" : "str"\n\
	}\n\
}';

	var res2 = '{\n\
	"a"              : "str",\n\
	"very_long_name" : true,\n\
	"c"              : 2,\n\
	"d"              : null,\n\
	"e"              :\n\
	[\n\
		"str",\n\
		false,\n\
		0,\n\
		null\n\
	],\n\
	"f"              :\n\
	{\n\
		"g"                   :\n\
		[\n\
			5,\n\
			6,\n\
			7\n\
		],\n\
		"real_very_long_name" : "str"\n\
	}\n\
}';

	if (body1 !== res1) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (body2 !== res2) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.getmonthname()
function test0020()
{
	var res1 = libcore.getmonthname(0, false);
	if (res1 !== 'мартобря') { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }

	var res2 = libcore.getmonthname(0, true);
	if (res2 !== 'Мартобрь') { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }

	var res3 = libcore.getmonthname(1, false);
	if (res3 !== 'января') { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }

	var res4 = libcore.getmonthname(1, true);
	if (res4 !== 'Январь') { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.date_strip()
function test0021()
{
	var source_date1 = null;

	var target_date1 = new Date();
	target_date1.setTime(0);
	target_date1.setHours(0);
	target_date1.setMinutes(0);
	target_date1.setSeconds(0);
	target_date1.setMilliseconds(0);

	var res1 = libcore.date_strip(source_date1);


	var source_date2 = new Date();
	source_date2.setTime(777777777777); // Thu Aug 25 1994 05:22:57 GMT+0400 (MSK)

	var target_date2 = new Date(1994, 7, 25); // 25 Aug 1994

	var res2 = libcore.date_strip(source_date2);


	if (libcore.cmp(res1, target_date1, true)  === false) { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.cmp(res2, target_date2, true)  === false) { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.convert_date()
function test0022()
{
	var res1 = libcore.convert_date(0, 0);
	if (res1 !== '01&nbsp;января&nbsp;1970') { test_log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }

	var res2 = libcore.convert_date(0, 1352032868);
	if (res2 !== '04&nbsp;ноября&nbsp;2012') { test_log('ERROR[' + arguments.callee.name + '()]: step002'); return false; }


	var ut = libcore.get_unixtime();

	var d = new Date();
	d.setTime(ut * 1000);

	var hour = String(d.getHours());
	var min  = String(d.getMinutes());

	if (hour.length !== 2) hour = '0' + hour;
	if (min.length  !== 2) min  = '0' + min;


	var res3 = libcore.convert_date(0, ut);
	var val3 = 'Сегодня&nbsp;в&nbsp;' + hour + ':' + min;
	if (res3 !== val3) { test_log('ERROR[' + arguments.callee.name + '()]: step003'); return false; }

	var res4 = libcore.convert_date(0, ut - (60 * 60 * 24));
	var val4 = 'Вчера&nbsp;в&nbsp;' + hour + ':' + min;
	if (res4 !== val4) { test_log('ERROR[' + arguments.callee.name + '()]: step004'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function do_it()
{
	if (test0001() === false) { return false; }
	if (test0002() === false) { return false; }
	if (test0003() === false) { return false; }
	if (test0004() === false) { return false; }
	if (test0005() === false) { return false; }
	if (test0006() === false) { return false; }
	if (test0007() === false) { return false; }
	if (test0008() === false) { return false; }
	if (test0009() === false) { return false; }
	if (test0010() === false) { return false; }
	if (test0011() === false) { return false; }
	if (test0012() === false) { return false; }
	if (test0013() === false) { return false; }
	if (test0014() === false) { return false; }
	if (test0015() === false) { return false; }
	if (test0016() === false) { return false; }
	if (test0017() === false) { return false; }
	if (test0018() === false) { return false; }
	if (test0019() === false) { return false; }
	if (test0020() === false) { return false; }
	if (test0021() === false) { return false; }
	if (test0022() === false) { return false; }

	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
if (do_it() === true)
{
	test_log('ok, test passed');
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// 0.1.1
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
// libcore.is_uint(), libcore.is_sint()
function test0001()
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
// libcore.min(), libcore.max()
function test0002()
{
	if (libcore.min(-10, 10) != -10)  { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.min(10, 20)  !=  10)  { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }


	if (libcore.max(-10, 10) !=  10)  { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }
	if (libcore.max(10, 20)  !=  20)  { console.log('ERROR[' + arguments.callee.name + '()]: step001'); return false; }


	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// libcore.uniq(), number array
function test0003()
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
function test0004()
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
function test0005()
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
function do_it()
{
	if (test0001() == false) { return false; }
	if (test0002() == false) { return false; }
	if (test0003() == false) { return false; }
	if (test0004() == false) { return false; }
	if (test0005() == false) { return false; }

	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
if (do_it() == true)
{
	console.log('ok, test passed');
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

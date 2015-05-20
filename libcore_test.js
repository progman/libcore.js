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
function do_it()
{
	if (test0001() == false) { return false; }

	return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
if (do_it() == true)
{
	console.log('ok, test passed');
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

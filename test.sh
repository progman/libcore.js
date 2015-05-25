#!/bin/bash

if [ "$(which nodejs)" == "" ];
then
	echo "ERROR: nodejs not found";
	exit 1;
fi

nodejs test.js;

exit 0;

#!/bin/bash

if [ "$(which node)" == "" ];
then
	echo "ERROR: node not found";
	exit 1;
fi

node test.js;

exit 0;

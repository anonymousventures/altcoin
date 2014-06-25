#!/bin/sh

echo "hi";

JS_TEMP="public/global.js"
JS_COMBINED_FILE="public/globalmin.js"

jsmin < $JS_TEMP > $JS_COMBINED_FILE
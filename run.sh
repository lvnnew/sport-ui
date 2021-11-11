#!/bin/sh

set -e
set -v

# docker build -t ui .

# export AUTH0_REDIRECT_URI=333333333333333333333

BUILD_FOLDER='/usr/share/nginx/html'
# BUILD_FOLDER='/app/build'

echo $ENDPOINT

ls $BUILD_FOLDER

cp $BUILD_FOLDER/config.json $BUILD_FOLDER/config.json.backup

cat $BUILD_FOLDER/config.json.backup | jq ".endpoint |= \"$ENDPOINT\"" > $BUILD_FOLDER/config.json

cat $BUILD_FOLDER/config.json

nginx -g "daemon off;"
# npx serve -l 80 $BUILD_FOLDER

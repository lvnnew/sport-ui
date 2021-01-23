#!/bin/sh

set -e
set -v

# docker build -t ui .

# grep -R "{AUTH0_REDIRECT_URI}" *
# grep -R "!!!!!!!!!!!!!!!!!!!!!!!" *
# grep -R "333333333333333333333" *

# export AUTH0_REDIRECT_URI=333333333333333333333

BUILD_FOLDER='/usr/share/nginx/html'
# BUILD_FOLDER='/app/build'

echo $ENDPOINT

find $BUILD_FOLDER -type f -exec sed -i "s/{AUTH0_CLIENT_ID}/$AUTH0_CLIENT_ID/g" {} +
find $BUILD_FOLDER -type f -exec sed -i "s/{AUTH0_DOMAIN}/$AUTH0_DOMAIN/g" {} +
find $BUILD_FOLDER -type f -exec sed -i "s@{AUTH0_REDIRECT_URI}@$AUTH0_REDIRECT_URI@g" {} +
find $BUILD_FOLDER -type f -exec sed -i "s@{ENDPOINT}@$ENDPOINT@g" {} +

find $BUILD_FOLDER -type f -exec sed -i "s/{DC_TOKEN}/$DC_TOKEN/g" {} +

ls $BUILD_FOLDER

cp $BUILD_FOLDER/config.json $BUILD_FOLDER/config.json.backup

cat $BUILD_FOLDER/config.json.backup | jq ".endpoint |= \"$ENDPOINT\"" > $BUILD_FOLDER/config.json

cat $BUILD_FOLDER/config.json

nginx -g "daemon off;"
# npx serve -l 80 $BUILD_FOLDER

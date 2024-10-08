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

cat $BUILD_FOLDER/config.json | jq ".endpoint |= \"$ENDPOINT\"" > $BUILD_FOLDER/config.json.tmp && mv $BUILD_FOLDER/config.json.tmp $BUILD_FOLDER/config.json
cat $BUILD_FOLDER/config.json | jq ".oidcAdmUrl |= \"$OIDC_ADM_URL\"" > $BUILD_FOLDER/config.json.tmp && mv $BUILD_FOLDER/config.json.tmp $BUILD_FOLDER/config.json
cat $BUILD_FOLDER/config.json | jq ".oidcAdmIssuer |= \"$OIDC_ADM_ISSUER\"" > $BUILD_FOLDER/config.json.tmp && mv $BUILD_FOLDER/config.json.tmp $BUILD_FOLDER/config.json
cat $BUILD_FOLDER/config.json | jq ".oidcAdmLogoutType |= \"$OIDC_ADM_LOGOUT_TYPE\"" > $BUILD_FOLDER/config.json.tmp && mv $BUILD_FOLDER/config.json.tmp $BUILD_FOLDER/config.json
cat $BUILD_FOLDER/config.json | jq ".oidcAdmRealm |= \"$OIDC_ADM_REALM\"" > $BUILD_FOLDER/config.json.tmp && mv $BUILD_FOLDER/config.json.tmp $BUILD_FOLDER/config.json
cat $BUILD_FOLDER/config.json | jq ".oidcAdmClientId |= \"$OIDC_ADM_CLIENT_ID\"" > $BUILD_FOLDER/config.json.tmp && mv $BUILD_FOLDER/config.json.tmp $BUILD_FOLDER/config.json
cat $BUILD_FOLDER/config.json | jq "checkLoginIframe |= \"$CHECK_LOGIN_IFRAME\"" > $BUILD_FOLDER/config.json.tmp && mv $BUILD_FOLDER/config.json.tmp $BUILD_FOLDER/config.json

cat $BUILD_FOLDER/config.json

nginx -g "daemon off;"
# npx serve -l 80 $BUILD_FOLDER

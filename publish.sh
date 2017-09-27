#!/bin/sh

if [ -z "$GH_TOKEN" ]; then
    echo "You must set the GH_TOKEN environment variable."
    echo "export GH_TOKEN=`<token>`"
    exit 1
fi

# This will build, package and upload the app to GitHub.
node .electron-vue/build.js && node_modules/.bin/build --mac -p always

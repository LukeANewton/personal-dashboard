#!/bin/bash

cd client/app
npm install
npm run build
cd ../..
npm install
npm install cors
rm -r build
cp -r client/app/build/ build
npm start

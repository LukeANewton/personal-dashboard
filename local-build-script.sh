#!/bin/bash

cd Client/app1
npm install
npm run build
cd ../..
npm install
npm install cors
rm -r build
cp -r Client/app1/build/ build
npm start

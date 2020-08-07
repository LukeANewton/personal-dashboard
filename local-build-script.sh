#!/bin/bash

cd client/app
npm install
npm install remove-markdown
npm install react-promise-tracker
npm install react-loader-spinner
npm run build
cd ../..
npm install
npm install cors
npm i node-fetch express-async-await
npm install express-useragent
rm -r build
cp -r client/app/build/ build
npm start

npm install

#install the type definition files for TypeScript compiler
#It will generate typings.json file
npm run typings -- install dt~core-js --save --global
npm run typings -- install dt~node --save --global

#build rxjs file. It will generate rxjs.module.min.js
node ./rxModuleBuilder.js

#It will run json-server data.js -p 3500 -m authMiddleware.js
# provide a restful service
npm start
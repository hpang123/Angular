npm install

#If you need a type definition for a package, for example core-js 
#we can search for a type definition available with following command
npm run typings -- search core-js

#install the type definition files for TypeScript compiler
#It will generate typings.json file
npm run typings -- install dt~core-js --save --global
npm run typings -- install dt~node --save --global

#build rxjs file. It will generate rxjs.module.min.js
node ./rxModuleBuilder.js

#It will run json-server data.js -p 3500 -m authMiddleware.js
# provide a restful service
npm start

#To test, change products by running on browser console
model.products.shift()
appRef.tick()
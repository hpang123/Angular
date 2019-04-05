"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
/*
 * Angular bootstrap file to load Angular module
 *
 * Select the platform that will be used and load the root module,
 * which is the entry point into the application.
 * Here is for browser-based applications
 */
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

/*
 * Angular bootstrap file to load Angular module
 * 
 * Select the platform that will be used and load the root module, 
 * which is the entry point into the application.
 * Here is for browser-based applications
 */
platformBrowserDynamic().bootstrapModule(AppModule);

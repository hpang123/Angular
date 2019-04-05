import { Component } from "@angular/core";

@Component({
    selector: "app",
    /*
     * When the routing feature is used, Angular looks for the router-outlet element, 
     * which defines the location in which the component 
     * that corresponds to the current URL should be displayed.
     */
    template: "<router-outlet></router-outlet>"
    /*
    template: "<store></store>"
    template: `<div class="bg-success p-a-1 text-xs-center">
					This is SportsStore
				</div>`*/
				
})
export class AppComponent { }

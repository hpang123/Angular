import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartsummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";

/*
 * This is the main store feature module to register all components
 * 
 * To add support for routerLnk attribute,
 * RouterModule module must be imported into the feature module
 */
@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent,
                   CartDetailComponent, CheckoutComponent],
    /*
     * Exports - they can be used elsewhere in the application.
     * they are used in app.module
     */
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }

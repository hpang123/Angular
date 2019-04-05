import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";

@NgModule({
    imports: [BrowserModule, StoreModule,
              RouterModule.forRoot([
                  { path: "store", component: StoreComponent,
                	  // We refresh, it go to /store
                	canActivate: [StoreFirstGuard]
                  },
                  { path: "cart", component: CartDetailComponent,
                	canActivate: [StoreFirstGuard]
                  },
                  { path: "checkout", component: CheckoutComponent,
                	canActivate: [StoreFirstGuard]
                  },
                  /*
                   * when the application navigates to the /admin URL, 
                   * it should load a feature module defined by a class 
                   * called AdminModule from the /app/admin/admin.module.ts file
                   */
                  { path: "admin", loadChildren: "app/admin/admin.module#AdminModule",
                	canActivate: [StoreFirstGuard]
                  },
                  { path: "**", redirectTo: "/store" }
              ])],
    providers: [StoreFirstGuard],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

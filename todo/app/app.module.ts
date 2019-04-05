import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

/*
 * Angular Root module
 * Provide configuration information through the properties
 * defined by the @NgModule decorator.
 * 
 * 
 */
@NgModule({
    imports: [BrowserModule, FormsModule],
    /*
     * components in the application and 
     * which one should be used to start the application
     */
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

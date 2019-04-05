import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { SharedState, SHARED_STATE } from "./sharedState.model";
import { Subject } from "rxjs/Subject";

import { StatePipe } from "./state.pipe";
import { MessageModule } from "../messages/message.module";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";
import { Model } from "../model/repository.model";
import { MODES } from "./sharedState.model";

/*
Subject class, which implements both the Observer
and Observable functionality. This makes it easy to create a service 
that allows events to be produced
and consumed with a single object.

The value-based provider tells Angular to use a Subject<SharedState > object 
to resolve dependencies
on the SHARED_STATE token, which will provide the components 
with the functionality they need to collaborate.
*/
@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule, MessageModule],
    declarations: [TableComponent, FormComponent, StatePipe],
    exports: [ModelModule, TableComponent, FormComponent],
    //providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }]

    providers: [{
        provide: SHARED_STATE,
        deps: [MessageService, Model],
        useFactory: (messageService, model) => {
        let subject = new Subject<SharedState>();
        /*
            SharedState change will trigger reportMessage that will trigger send message
            to message.component that receive the message 
        */
        subject.subscribe(m => messageService.reportMessage(
            new Message(MODES[m.mode] + (m.id != undefined? 
                ` ${model.getProduct(m.id).name}` : "")))
        );
        return subject;
        }
    }]
})
export class CoreModule { }

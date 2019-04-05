import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { Model } from "./repository.model";
import { RestDataSource, REST_URL } from "./rest.datasource";


@NgModule({
    imports: [HttpModule],
    providers: [Model, RestDataSource,
        { provide: REST_URL, useValue: `http://${location.hostname}:3500/products` }]
})
export class ModelModule { }

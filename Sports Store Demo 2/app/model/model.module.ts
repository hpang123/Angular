import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

import { RestDataSource } from "./rest.datasource";
import { HttpModule } from "@angular/http";

/*
 * This is main module register models
 */
@NgModule({
	/*
	 * The imports property is used to declare a dependency 
	 * on HttpModule feature module, which provides 
	 * the Http service in rest.datasource.ts
	 */
	imports: [HttpModule],
	/*
	 * Register services that have @Injectable
	 * model.module is imported in store.module
	 * 
	 * when it needs to create an instance of a class with a StaticDataSource constructor parameter, 
	 * it should use aRestDataSource instead
	 */
    providers: [ProductRepository, Cart, Order, OrderRepository,
                 { provide: StaticDataSource, useClass: RestDataSource }]
})
export class ModelModule { }

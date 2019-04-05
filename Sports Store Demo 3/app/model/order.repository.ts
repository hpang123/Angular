import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Order } from "./order.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
	private loaded: boolean = false;

    constructor(private dataSource: RestDataSource) { }

    loadOrders() {
    	this.loaded = true;
    	this.dataSource.getOrders().subscribe(orders => this.orders = orders);
    }
    
    getOrders(): Order[] {
    	//How to make synch with new order after it loads
    	
    	if (!this.loaded) {
    		this.loadOrders(); //make sure to run once. Otherwise, it keeps calling the server somehow (orderTable.compnent template)
    	}
    	
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }
    
    updateOrder(order: Order) {
    	this.dataSource.updateOrder(order).subscribe(order => {
    		this.orders.splice(this.orders.
    				findIndex(o => o.id == order.id), 1, order);
    	});
    }
    
    deleteOrder(id: number) {
    	this.dataSource.deleteOrder(id).subscribe(order => {
    		this.orders.splice(this.orders.findIndex(o => id == o.id));
    	});
    }
}

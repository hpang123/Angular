import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

/*
 * We pass data.js to json-server in package.json
 */
@Injectable()
export class RestDataSource {
    baseUrl: string;
	auth_token: string;

	// http will be injected
    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    /*
	 * json-server's middleware authMiddleware.js will verify login
	 * store token on the client side
	 */
    authenticate(user: string, pass: string): Observable<boolean> {
    	return this.http.request(new Request({
    		method: RequestMethod.Post,
    		url: this.baseUrl + "login",
    		body: { name: user, password: pass }
    	})).map(response => {
    		let r = response.json();
    		this.auth_token = r.success ? r.token : null;
    		return r.success;
    	});
    }
    
    getProducts(): Observable<Product[]> {
        return this.sendRequest(RequestMethod.Get, "products");
    }

    saveProduct(product: Product): Observable<Product> {
    	//Do we need to set product id here or server takes care of it
    	//somehow the server assigns id automatically
    	return this.sendRequest(RequestMethod.Post, "products", product, true);
    }
    
    updateProduct(product: Product): Observable<Product> {
    	return this.sendRequest(RequestMethod.Put, `products/${product.id}`, product, true);
    }
    
    deleteProduct(id: number): Observable<Product> {
    	return this.sendRequest(RequestMethod.Delete, `products/${id}`, null, true);
    }
    	
    getOrders(): Observable<Order[]> {
    	return this.sendRequest(RequestMethod.Get, "orders", null, true);
    }
    
    deleteOrder(id: number): Observable<Order> {
    	return this.sendRequest(RequestMethod.Delete, `orders/${id}`, null, true);
    }
    
    updateOrder(order: Order): Observable<Order> {
    	return this.sendRequest(RequestMethod.Put, `orders/${order.id}`, order, true);
    }
    	
    saveOrder(order: Order): Observable<Order> {
        return this.sendRequest(RequestMethod.Post, "orders", order);
    }

    private sendRequest(verb: RequestMethod,
        url: string, body?: Product | Order, auth: boolean = false)
    		: Observable<Product | Product[] | Order | Order[]> {
        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        /*
         * For admin url, send request to server with authorization header
         */
        if (auth && this.auth_token != null) {
        	request.headers.set("authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).map(response => response.json());
    }
}

import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    moduleId: module.id,
    //template: `<div><h3 class="bg-info p-a-1">Cart Detail Component</h3></div>`
    templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {

	//template will use cart data
    constructor(public cart: Cart) { }
}

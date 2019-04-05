import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    selector: "cart-summary",
    moduleId: module.id,
    templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent {
	/*
	 * Angular will inject Cart object
	 * template will use cart
	 */
    constructor(public cart: Cart) { }
}

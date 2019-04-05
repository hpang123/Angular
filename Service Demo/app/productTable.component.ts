import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { PaCellColor } from "./cellColor.directive";import { DiscountService } from "./discount.service";



@Component({
    selector: "paProductTable",
    //Typescript multiline strings
    /*
    template: `<div class='bg-info p-a-1'>
				This is a multiline template
				</div>`
	*/
    templateUrl: "app/productTable.component.html"
})
export class ProductTableComponent {
    //This will pass to child component
    //We don't need it after we use @Injectable() service
    
    //discounter: DiscountService = new DiscountService();
    
	/*
	 * The child component's host element acts as the bridge 
	 * between the parent and child components, 
	 * and the input property allows the component to provide the child 
	 * with the data it needs
	 * 
	 * Model is from Parent component.ts (afte new Model())
	 * In parent template.html, it assigns to ProductTable host element
	 * So it can  input here.
	 */
    //@Input("model")
    //dataModel: Model;

    constructor(private dataModel: Model) { }

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }
    
}

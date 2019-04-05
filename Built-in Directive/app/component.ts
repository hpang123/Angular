import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    model: Model = new Model();

	constructor(ref: ApplicationRef) {
		(<any>window).appRef = ref;
		(<any>window).model = this.model;
	}

	getProductByPosition(position: number): Product {
		return this.model.getProducts()[position];
	}
	
	getProduct(key: number): Product {
		return this.model.getProduct(key);
	}
	
	getProducts(): Product[] {
		return this.model.getProducts();
	}

	getProductCount(): number {
		console.log("getProductCount invoked");
	    return this.getProducts().length;
	}

	targetName: string = "Kayak";
	
	counter: number = 1;

	
	getKey(index: number, product: Product) {
		return product.id);
	}
	
	/* Not good to use in template since it change application state
	get nextProduct(): Product {
        return this.model.getProducts().shift();
    }
*/

    getProductPrice(index: number): number {
        return Math.floor(this.getProduct(index).price);
    }
    
	getClasses(): string {
		return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
	}
	
	getAllClasses(key: number): string {
		let product = this.model.getProduct(key);
		return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
	}
	
	getClassMap(key: number): Object {
		let product = this.model.getProduct(key);
		return {
			"text-xs-center bg-danger": product.name == "Kayak",
			"bg-info": product.price < 50
		};
	}
	
	fontSizeWithUnits: string = "30px";
	fontSizeWithoutUnits: string= "30";
	
	getStyles(key: number) {
		let product = this.model.getProduct(key);
		return {
			fontSize: "30px",
			"margin.px": 100,
			color: product.price > 50 ? "red" : "green"
		};
	}
}

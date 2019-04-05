import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Model } from "./repository.model";
import { Product } from "./product.model";

import { ProductFormGroup } from "./form.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
	tooltipHide: boolean = true;

    model: Model = new Model();
	//form is used for Reactive way to handle form instead of template ngForm
	form: ProductFormGroup = new ProductFormGroup();
	
	getClasses(): string {
		return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
	}
	
	getProduct(key: number): Product {
		return this.model.getProduct(key);
	}
	
	getProducts(): Product[] {
		return this.model.getProducts();
	}
	
	selectedProduct: string;
	
	getSelected(product: Product): boolean {
		return product.name == this.selectedProduct;
	}
	
	newProduct: Product = new Product();
	
	get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product) {
    	console.log(p==this.newProduct);// true
        console.log("New Product: " + this.jsonProduct);
        this.model.saveProduct(p);
    }
    
    getValidationMessages(state: any, thingName?: string) {
    	let thing: string = state.path || thingName;
    	let messages: string[] = [];
    	if (state.errors) {
    		for (let errorName in state.errors) {
    			switch (errorName) {
    				case "required":
    					messages.push(`You must enter a ${thing}`);
    					break;
    				case "minlength":
    					messages.push(`A ${thing} must be at least
    							${state.errors['minlength'].requiredLength} characters`);
    					break;
    				case "pattern":
    					messages.push(`The ${thing} contains illegal characters`);
    					break;
    			}
    		}
    	}
    	return messages;
    }
    
    formSubmitted: boolean = false;
    
    submitForm(form: NgForm) {
    	this.formSubmitted = true;
    	if (form.valid) {
    		this.addProduct(this.newProduct);
    		this.newProduct = new Product();
    		form.reset();
    		this.formSubmitted = false;
    	}
    }
    
    getFormValidationMessages(form: NgForm): string[] {
    	let messages: string[] = [];
    	Object.keys(form.controls).forEach(k => {
    		this.getValidationMessages(form.controls[k], k)
    			.forEach(m => messages.push(m));
    	});
    	return messages;
    }
}

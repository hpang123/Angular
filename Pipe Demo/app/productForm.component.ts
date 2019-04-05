import { Component, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { Product } from "./product.model";
import { ProductFormGroup } from "./form.model";

@Component({
    selector: "paProductForm",
    //template: "<div>{{model}}</div>"
    templateUrl: "app/productForm.component.html",
    //styles: ["div { background-color: lightgreen"]
    //styleUrls: ["app/productForm.component.css"],
    //Angular emulates the shadow DOM by writing content and styles to add attributes
    //We don't need to define here since Emulated is the default
    encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent {
	model: String = "This is the model"
	
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;

	/*
	 * Child components can use output properties that 
	 * define custom events that signal important changes and
	 * that allow the parent component to respond when they occur
	 * 
	 * In parent template, it receives the paNewProduct event with newProduct submitted
	 * It trigger to call addProduct($event) method in parent component.
	 * Once it update Model, the table component display the new product 
	 * since it shares the same Model
	 */
    @Output("paNewProduct")
    newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            this.newProductEvent.emit(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}

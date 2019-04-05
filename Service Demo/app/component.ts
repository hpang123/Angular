import { ApplicationRef, Component } from "@angular/core";


//import { Model } from "./repository.model";
//import { Product } from "./product.model";
//import { ProductFormGroup } from "./form.model";


@Component({
    selector: "app",
    templateUrl: "app/template.html"
    //styles: ["/deep/ div { border: 2px black solid;  font-style:italic }"]
})
export class ProductComponent {
    /*
    //We use dependency injection through constructor
    //model: Model = new Model();
    constructor(private model: Model) { }

	addProduct(p: Product) {
		this.model.saveProduct(p);
    }
    */
}

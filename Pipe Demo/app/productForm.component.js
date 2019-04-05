"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_model_1 = require("./product.model");
var form_model_1 = require("./form.model");
var ProductFormComponent = (function () {
    function ProductFormComponent() {
        this.model = "This is the model";
        this.form = new form_model_1.ProductFormGroup();
        this.newProduct = new product_model_1.Product();
        this.formSubmitted = false;
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
        this.newProductEvent = new core_1.EventEmitter();
    }
    ProductFormComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.newProductEvent.emit(this.newProduct);
            this.newProduct = new product_model_1.Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    };
    __decorate([
        core_1.Output("paNewProduct"), 
        __metadata('design:type', Object)
    ], ProductFormComponent.prototype, "newProductEvent", void 0);
    ProductFormComponent = __decorate([
        core_1.Component({
            selector: "paProductForm",
            //template: "<div>{{model}}</div>"
            templateUrl: "app/productForm.component.html",
            //styles: ["div { background-color: lightgreen"]
            //styleUrls: ["app/productForm.component.css"],
            //Angular emulates the shadow DOM by writing content and styles to add attributes
            //We don't need to define here since Emulated is the default
            encapsulation: core_1.ViewEncapsulation.Emulated
        }), 
        __metadata('design:paramtypes', [])
    ], ProductFormComponent);
    return ProductFormComponent;
}());
exports.ProductFormComponent = ProductFormComponent;

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
var repository_model_1 = require("./repository.model");
var ProductTableComponent = (function () {
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
    function ProductTableComponent(dataModel) {
        this.dataModel = dataModel;
    }
    ProductTableComponent.prototype.getProduct = function (key) {
        return this.dataModel.getProduct(key);
    };
    ProductTableComponent.prototype.getProducts = function () {
        return this.dataModel.getProducts();
    };
    ProductTableComponent.prototype.deleteProduct = function (key) {
        this.dataModel.deleteProduct(key);
    };
    ProductTableComponent = __decorate([
        core_1.Component({
            selector: "paProductTable",
            //Typescript multiline strings
            /*
            template: `<div class='bg-info p-a-1'>
                        This is a multiline template
                        </div>`
            */
            templateUrl: "app/productTable.component.html"
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model])
    ], ProductTableComponent);
    return ProductTableComponent;
}());
exports.ProductTableComponent = ProductTableComponent;

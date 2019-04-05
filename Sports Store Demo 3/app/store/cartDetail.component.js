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
var cart_model_1 = require("../model/cart.model");
var CartDetailComponent = (function () {
    //template will use cart data
    function CartDetailComponent(cart) {
        this.cart = cart;
    }
    CartDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            //template: `<div><h3 class="bg-info p-a-1">Cart Detail Component</h3></div>`
            templateUrl: "cartDetail.component.html"
        }), 
        __metadata('design:paramtypes', [cart_model_1.Cart])
    ], CartDetailComponent);
    return CartDetailComponent;
}());
exports.CartDetailComponent = CartDetailComponent;

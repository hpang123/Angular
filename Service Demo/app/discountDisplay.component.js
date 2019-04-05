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
var discount_service_1 = require("./discount.service");
var PaDiscountDisplayComponent = (function () {
    //get it from parent component
    //@Input("discounter")
    //discounter: DiscountService;
    /*
    A class declares dependencies using its constructor
    The term dependency injection arises because each
    dependency is injected into the constructor to create the new instance.
    since the service has @Injectable(). So we don't need declare @Input
    */
    function PaDiscountDisplayComponent(discounter) {
        this.discounter = discounter;
    }
    PaDiscountDisplayComponent = __decorate([
        core_1.Component({
            selector: "paDiscountDisplay",
            template: "<div class=\"bg-info p-a-1\">\n                The discount is {{discounter.discount}}\n               </div>"
        }), 
        __metadata('design:paramtypes', [discount_service_1.DiscountService])
    ], PaDiscountDisplayComponent);
    return PaDiscountDisplayComponent;
}());
exports.PaDiscountDisplayComponent = PaDiscountDisplayComponent;

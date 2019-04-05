import { Component, Input } from "@angular/core";
import { DiscountService } from "./discount.service";

@Component({
    selector: "paDiscountDisplay",
    template: `<div class="bg-info p-a-1">
                The discount is {{discounter.discount}}
               </div>`
})
export class PaDiscountDisplayComponent {
    //get it from parent component
    //@Input("discounter")
    //discounter: DiscountService;
    
    /*
    A class declares dependencies using its constructor
    The term dependency injection arises because each
    dependency is injected into the constructor to create the new instance.
    since the service has @Injectable(). So we don't need declare @Input
    */
    constructor(private discounter: DiscountService) { }
}

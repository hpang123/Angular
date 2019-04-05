import {
    Directive, ElementRef, Attribute, Input,
    SimpleChange, Output, EventEmitter, HostListener, HostBinding
} from "@angular/core";

import { Product } from "./product.model";

@Directive({
    selector: "[pa-attr]"
})
export class PaAttrDirective {
	
	/*
	 * constructor cannot access the input property value 
	 * because its value will not be set by Angular until after the constructor has completed 
	 * and the new directive object has been produced. 
	 * To address this, directives can implement lifecycle hook methods, 
	 * which Angular uses to provide directives with useful information 
	 * after they have been created and while the application is running, as described
	 */
	/* Method 1 for event
	constructor(private element: ElementRef) {
		this.element.nativeElement.addEventListener("click", e => {
			if (this.product != null) {
				this.click.emit(this.product.category);
			}
		});
	}
	
	@Input("pa-attr")
    bgClass: string;
	
	@Input("pa-product")
	product: Product;
	
	//Bind to the event
	@Output("pa-category")
	click = new EventEmitter<string>();
	*/
	
	/* Not ideal use ngOinInit in this case
	ngOnInit() {
		this.element.nativeElement.classList.add(this.bgClass || "bg-success");
		console.log("call ngOnInit");
	}
	
	
	//ngOnChanges method is called once before the ngOnInit method 
	// then called again each time, there are changes to any of a directive’s input properties.
	 
	ngOnChanges(changes: {[property: string]: SimpleChange }) {
		let change = changes["bgClass"];
		let classList = this.element.nativeElement.classList;
		
		if (!change.isFirstChange() && classList.contains(change.previousValue)) {
			classList.remove(change.previousValue);
		}
		if (!classList.contains(change.currentValue)) {
			classList.add(change.currentValue);
		}
	}
	*/
	
	/*
	 * @HostBinding decorator is used to set up a property binding 
	 * on the host element and is applied to a directive property. 
	 * Here sets up a binding between the class property on the host element 
	 * and the decorator’s bgClass property
	 */
    @Input("pa-attr")
    @HostBinding("class")
    bgClass: string;


    @Input("pa-product")
    product: Product;

    @Output("pa-category")
    click = new EventEmitter<string>();

    @HostListener("click")
    triggerCustomEvent() {
        if (this.product != null) {
            this.click.emit(this.product.category);
        }
    }
    
}

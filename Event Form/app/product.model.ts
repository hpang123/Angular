export class Product {

	/* Typescript make easy. ? means option parameter 
	 * no difference for javascript
	 */
    constructor(public id?: number,
        public name?: string,
        public category?: string,
        public price?: number) { }
}

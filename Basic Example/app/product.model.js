"use strict";
var Product = (function () {
    /* Typescript make easy. ? means option parameter
     * no difference for javascript
     */
    function Product(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;

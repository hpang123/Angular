"use strict";
var Product = (function () {
    /*Typescript make easy. ? means option parameter */
    function Product(id, name, category, description, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;

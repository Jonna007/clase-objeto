'use strict'

class Product {
        constructor (description, price, stock) {
            this.description = description;
            this.price = price;
            this.stock =stock;
    }
    showInfo (){
        alert(`Descripcion: ${this.description}, Precio: ${this.price}, En Stock: ${this.stock}`);
    }
    minusStock(qty) {
    if (this.stock >= qty) {
        this.stock -= qty;
        alert(`Stock reducido en ${qty}. Stock actual: ${this.stock}`);
    } else{
        alert ('No hay suficiente Stock para reducir la cantidad solicitada.');
    }
    }
    incrementStock(qty) {
        this.stock += qty;
        alert(`Stock incrementado en ${qty}. Stock actual: ${this.stock}`);
    }
    updatePrice(newPrice) {
        this.price = newPrice;
        alert(`Precio actualizado a: ${this.price}`);
    }

}

let product = new Product ('Gorra', 10.00, 16);

product.showInfo();
product.minusStock(5);
product.incrementStock(6);
product.updatePrice(9.99);

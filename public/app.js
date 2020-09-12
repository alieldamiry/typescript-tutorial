"use strict";
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var inv1 = new Invoice('Ali', 'freelance work', 200);
var inv2 = new Invoice('Sara', 'Modifcation', 1000);
var invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber,
    // );
});

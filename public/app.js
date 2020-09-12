//interfaces 
import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'pluming work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent' + amount);
        return amount;
    }
};
let greetPerson = (person) => {
    console.log('hello', person.name);
};
const inv1 = new Invoice('Ali', 'freelance work', 200);
const inv2 = new Invoice('Sara', 'Modifcation', 1000);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});

//interfaces 
import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/hasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'pluming work', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

interface isPerson {
    name: string,
    age: number,
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent' + amount);
        return amount;
    }
};


let greetPerson = (person: isPerson) => {
    console.log('hello', person.name);
}

const inv1 = new Invoice('Ali', 'freelance work', 200);
const inv2 = new Invoice('Sara', 'Modifcation', 1000);

let invoices: Invoice[] = []
invoices.push(inv1);
invoices.push(inv2);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFontElement;

// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);

});

class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
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
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber,
    // );

});

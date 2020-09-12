import { HasFormatter } from "../interfaces/hasFormatter";
export class Payment implements HasFormatter {
    constructor(
        readonly recepient: string,
        private details: string,
        public amount: number,
    ) { }
    format() {
        return `${this.recepient} is owed ${this.amount} for ${this.details}`
    }
}
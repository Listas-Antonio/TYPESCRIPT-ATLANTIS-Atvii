import promptSync from "prompt-sync";
import Telephone from "../models/telephone";

export default class Entrada {
    public receiveNumber(message: string): number {
        let prompt = promptSync();
        let value = prompt(`${message} `)
        let number = new Number(value)
        return number.valueOf()
    }
    public receiveText(message: string): string {
        let prompt = promptSync();
        let text = prompt(`${message} `)
        return text
    }
    public receiveDate(message: string): Date {
        let prompt = promptSync();
        let text = prompt(`${message}, Pattern dd/MM/yyyy: `)
        let parts = text.split('/')
        let year = new Number(parts[2])
        let month = new Number(parts[1])
        let day = new Number(parts[0])
        let data = new Date(year.valueOf(), month.valueOf() - 1, day.valueOf())
        return data
    }
    public receiveTelephone(warn: string): Telephone {
        let prompt = promptSync()
        let text = (`${warn}, Pattern: "DDD number": `)
        let parts = text.split("-");
        let ddd = new String(parts[0]);
        let number = new String(parts[1]);
        let telephone = new Telephone(ddd.valueOf(), number.valueOf());
        return telephone;
    }
}
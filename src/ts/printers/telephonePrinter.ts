import Printer from "../interfaces/printer";
import Telephone from "../models/telephone";

export default class TelephonesPrinter implements Printer {
  private telephone: Telephone;

  constructor(telephone: Telephone) {
    this.telephone = telephone;
  }

  print(): string {
    let impression =
      `| Telephone:\n` + `| ${this.telephone.Ddd} - ` + `${this.telephone.Number}`;
    return impression;
  }
}
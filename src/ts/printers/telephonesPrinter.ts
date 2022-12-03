import Printer from "../interfaces/printer";
import Telephone from "../models/telephone";
import TelephonePrinter from "./telephonePrinter";

export default class TelephonesPrinter implements Printer {
  private telephones: Telephone[];
  private printer!: Printer;

  constructor(telephones: Telephone[]) {
    this.telephones = telephones;
  }

  print(): string {
    let impressao = ``;
    for (let index = 0; index < this.telephones.length; index++) {
      this.printer = new TelephonePrinter(this.telephones[index]);
      if (index == 0) {
        impressao = impressao + `${this.printer.print()}`;
      } else {
        impressao = impressao + `\n${this.printer.print()}`;
      }
    }
    return impressao;
  }
}
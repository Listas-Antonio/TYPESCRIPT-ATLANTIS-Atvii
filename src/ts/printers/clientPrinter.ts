import Printer from "../interfaces/printer";
import Client from "../models/client";
import DocumentsPrinter from "./documentsPrinter";
import AddressPrinter from "./addressPrinter";
import TelephonesPrinter from "./telephonesPrinter";

export default class ClientPrinter implements Printer {
    private client: Client
    private printer!: Printer

    constructor(client: Client) {
        this.client = client

    }
    print(): string {
        let impression = `****************************\n`
            + `| Nome: ${this.client.Name}\n`
            + `| Nome social: ${this.client.SocialName}\n`
            + `| Data de nascimento: ${this.client.BirthDate.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.client.RegistrationDate.toLocaleDateString()}`

        this.printer = new AddressPrinter(this.client.Address)
        impression = impression + `\n${this.printer.print()}`

        this.printer = new DocumentsPrinter(this.client.Documents)
        impression = impression + `\n${this.printer.print()}`

        this.printer = new TelephonesPrinter(this.client.Telephones);
        impression = impression + `\n${this.printer.print()}`;

        impression = impression + `\n****************************`
        return impression
    }
}
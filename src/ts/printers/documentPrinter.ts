import Printer from "../interfaces/printer";
import Document from "../models/document";

export default class DocumentPrinter implements Printer {
    private document: Document

    constructor(document: Document) {
        this.document = document
    }

    print(): string {
        let impression = `| Document:\n`
            + `| Tipo: ${this.document.DocumentType}\n`
            + `| Data expedição: ${this.document.ShippingDate.toLocaleDateString()}\n`
            + `| Número: ${this.document.Number}`
        return impression
    }
}
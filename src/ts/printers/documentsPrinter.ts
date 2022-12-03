import Printer from "../interfaces/printer"
import Document from "../models/document"
import DocumentPrinter from "./documentPrinter"

export default class DocumentsPrinter implements Printer {
    private documents: Document[]
    private printer!: Printer

    constructor(documents: Document[]) {
        this.documents = documents
    }
    
    print(): string {
        let impression = ``
        for (let index = 0; index < this.documents.length; index++) {
            this.printer = new DocumentPrinter(this.documents[index])
            if (index == 0) {
                impression = impression + `${this.printer.print()}`
            } else {
                impression = impression + `\n${this.printer.print()}`
            }
        }
        return impression
    }
}
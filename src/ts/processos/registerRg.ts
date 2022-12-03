import Proccess from "../abstracts/process";
import { DocumentType } from "../enumerators/documentType";
import Client from "../models/client";
import Documento from "../models/document";

export default class CadastroRg extends Proccess {
    private client: Client
    constructor(client: Client) {
        super()
        this.client = client
    }

    Proccess(): void {
        let numero = this.receiver.receiveText('Qual o número do RG?')
        let dataExpedicao = this.receiver.receiveDate('Qual a data de expedição do RG?')
        let rg = new Documento(numero, DocumentType.RG, dataExpedicao)
        this.client.Documents.push(rg)
    }
}
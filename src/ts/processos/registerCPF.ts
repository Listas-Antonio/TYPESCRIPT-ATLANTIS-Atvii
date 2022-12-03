import Processo from "../abstracts/process";
import { DocumentType } from "../enumerators/documentType";
import Client from "../models/client";
import Document from "../models/document";

export default class CadastroCpf extends Processo{
    private client: Client
    constructor(cliete: Client){
        super()
        this.client = cliete
    }
    Proccess(): void {
        let numero = this.receiver.receiveText('Numero do CPF: ')
        let dataExpedicao = this.receiver.receiveDate('Data de expedição')
        let cpf = new Document(numero, DocumentType.CPF, dataExpedicao)
        this.client.Documents.push(cpf)
    }
}
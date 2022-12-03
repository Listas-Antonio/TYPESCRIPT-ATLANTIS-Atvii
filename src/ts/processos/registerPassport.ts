import Processo from "../abstracts/process";
import { DocumentType } from "../enumerators/documentType"
import Client from "../models/client";
import Documento from "../models/document";

export default class cadastroPassaporte extends Processo{
    private client: Client
    constructor(client: Client){
        super()
        this.client = client
    }
    Proccess(): void {
        let number = this.receiver.receiveText('Numero do Passaporte: ')
        let expeditionDate = this.receiver.receiveDate('Data de expedição')
        let passport = new Documento(number, DocumentType.Passaporte, expeditionDate)
        this.client.Documents.push(passport)
    }
}
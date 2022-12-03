import Proccess from "../abstracts/process";
import Storage from "../domain/storage";
import ClientPrinter from "../printers/clientPrinter";
import Impressor from "../interfaces/printer";
import Client from "../models/client";

export default class ListagemTitulares extends Proccess {
    private clients: Client[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clients = Storage.UniqueInstance.Clients
    }
    Proccess(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes titulares...')
        this.clients.forEach(client => {
            if (this.holder(client)) {
                this.impressor = new ClientPrinter(client)
                console.log(this.impressor.print())
            }
        })
    }
    private holder(client: Client): boolean {
        let verification = false
        if (client.Holder == undefined) {
            verification = true
        }
        return verification
    }
}
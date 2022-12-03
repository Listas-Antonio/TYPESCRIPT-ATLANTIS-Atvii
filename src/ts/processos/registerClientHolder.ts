import Proccess from "../abstracts/process";
import Storage from "../domain/storage";
import Client from "../models/client";
import RegisterClientDocument from "./registerClientDocument";
import RegisterAddressHolder from "./registerAddressHolder";
import RegisterTelephone from "./registerTelephone";

export default class CadastroClienteTitular extends Proccess {
    Proccess(): void {
        console.log('Iniciando o cadastro de um novo client...')
        let nome = this.receiver.receiveText('Qual o nome do client?')
        let nomeSocial = this.receiver.receiveText('Qual o nome social do client?')
        let dataNascimento = this.receiver.receiveDate('Qual a data de nascimento?')
        let client = new Client(nome, nomeSocial, dataNascimento)

        this.proccess = new RegisterAddressHolder(client)
        this.proccess.Proccess()

        this.proccess = new RegisterClientDocument(client)
        this.proccess.Proccess()

        this.proccess = new RegisterTelephone(client)
        this.proccess.Proccess
        
        let storage = Storage.UniqueInstance
        storage.Clients.push(client)

        console.log('Finalizando o cadastro do client...')
    }
}
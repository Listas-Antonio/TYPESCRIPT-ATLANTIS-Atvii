import Proccess from "../abstracts/process";
import Storage from "../domain/storage";
import Client from "../models/client";
import Address from "../models/address";
import RegisterClientDocument from "./registerClientDocument";
import CadastrarTelefones from "./registerTelephone";

export default class RegisterClientDependent extends Proccess { 
    private client: Client[]

    constructor(){
        super();
        this.client = Storage.UniqueInstance.Clients;
        this.execution = true
    }
    
    Proccess(): void {
        console.log('Iniciando o cadastro de um novo dependente...')

        let receiver = this.receiver.receiveText("Digite o RG do Titular: ")
        this.client.forEach(i => {
            i.Documents.filter(x => {
                if(x.Number === receiver){
                    let nome = this.receiver.receiveText('Qual o nome do novo dependente ?')
                    let nomeSocial = this.receiver.receiveText('Qual o nome social do novo dependente ?')
                    let dataNascimento = this.receiver.receiveDate('Qual a data de nascimento ?')
                    let dependente = new Client(nome, nomeSocial, dataNascimento)

        this.proccess = new RegisterClientDocument(dependente)
        this.proccess.Proccess()

        this.proccess = new CadastrarTelefones(dependente)
        this.proccess.Proccess

        dependente.Address = i.Address.clone() as Address;

        i.Dependents.push(dependente);

        let storage = Storage.UniqueInstance
        storage.Clients.push(dependente)

        console.log('Finalizando o cadastro do dependente...')
            }
    })})
}}   
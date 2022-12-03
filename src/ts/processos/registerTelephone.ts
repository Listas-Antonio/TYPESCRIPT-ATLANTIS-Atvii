import Proccess from "../abstracts/process";
import TelephoneTypeRegistrationMenu from "../menus/telephoneTypeRegistrationMenu";
import Client from "../models/client";
import Telefone from "../models/telephone";

export default class RegisterTelephone extends Proccess {
    private client: Client
    constructor(client: Client) {
        super()
        this.client = client
        this.menu = new TelephoneTypeRegistrationMenu()
        this.execution = true
    }

    Proccess(): void {
        console.log(`Cadastrar Telefone`);
        while (this.execution) {
            this.menu.show();
            this.option = this.receiver.receiveNumber("Qual opção desejada?");
            switch (this.option) {
            case 1:
                let numberTel = this.receiver.receiveText("Digite seu número, no formato DDD-Numero:")
                let numberParts = numberTel.split('-')
                let telefone = new Telefone(numberParts[0], numberParts[1])
                this.client.Telephones.push(telefone)
                break; 
            case 0:
                this.execution = false;
                break;
            }
        }
    }
}
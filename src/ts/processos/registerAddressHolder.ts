import Processo from "../abstracts/process";
import Client from "../models/client";
import Address from "../models/address";

export default class CadastroEnderecoTitular extends Processo {
    private client: Client

    constructor(client: Client) {
        super()
        this.client = client
    }

    Proccess(): void {
        console.log('Coletando os dados de endereço...')
        let rua = this.receiver.receiveText('Qual a rua?')
        let bairro = this.receiver.receiveText('Qual o bairro?')
        let cidade = this.receiver.receiveText('Qual a cidade?')
        let estado = this.receiver.receiveText('Qual o estado?')
        let pais = this.receiver.receiveText('Qual o país?')
        let codigoPostal = this.receiver.receiveText('Qual o código postal?')
        let address = new Address(rua,bairro,cidade,estado,pais,codigoPostal)
        this.client.Address = address
    }
}
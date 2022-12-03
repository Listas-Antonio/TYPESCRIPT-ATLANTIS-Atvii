import Processo from "../abstracts/process";
import ClientTypeRegistrationMenu from "../menus/clientTypeRegistrationMenu";
import RegisterClientDependent from "./registerClientDependent";
import RegisterClientHolder from "./registerClientHolder";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new ClientTypeRegistrationMenu()
    }
    Proccess(): void {
        this.menu.show()
        this.option = this.receiver.receiveNumber('Qual opção desejada?')
        
        switch (this.option) {
            case 1:
                this.proccess = new RegisterClientHolder()
                this.proccess.Proccess()
                break

            case 2:
                this.proccess = new RegisterClientDependent()
                this.proccess.Proccess()
                break

            default:
                console.log('Opção não entendida :(')
        }
    }
}
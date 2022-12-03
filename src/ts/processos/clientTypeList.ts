import Proccess from "../abstracts/process";
import ClientListTypeMenu from "../menus/clientListTypeMenu";
import ListagemDependentes from "./listDependents";
import ListagemTitulares from "./listHolders";

export default class ClientTypeList extends Proccess {
    constructor(){
        super()
        this.menu = new ClientListTypeMenu()
    }
    
    Proccess(): void {
        this.menu.show()
        this.option = this.receiver.receiveNumber('Qual a opção desejada?')
        switch (this.option) {
            case 1:
                this.proccess = new ListagemTitulares()
                this.proccess.Proccess()
                break;
            case 2:
                this.proccess = new ListagemDependentes()
                this.proccess.Proccess()
                break
            default:
                console.log('Opção não entendida... :(')
        }
    }
}
import Proccess from "../abstracts/process"
import MainMenu from "../menus/mainMenu"
import ExcludeClient from "./excludeClient"
import RegisterClientType from "./registerClientType"
import EditClientType from "./editClientType"
import ClientTypeList from "./clientTypeList"

export default class main extends Proccess {
    constructor() {
        super()
        this.execution = true
        this.menu = new MainMenu()
    }
    Proccess(): void {
        this.menu.show()
        this.option = this.receiver.receiveNumber('Qual opção desejada?')
        switch (this.option) {
            case 1:
                this.proccess = new RegisterClientType()
                this.proccess.Proccess()
                break
            case 2:
                this.proccess = new EditClientType()
                this.proccess.Proccess()
                break
            case 3:
                this.proccess = new ClientTypeList()
                this.proccess.Proccess()
                break
            case 4:
                this.proccess = new ExcludeClient();
                this.proccess.Proccess();
                break;
            case 0:
                this.execution = false
                console.log('Até mais!')
                console.clear()
                break
            default:
                console.log('Opção não compreendida :(')
        }
    }
}
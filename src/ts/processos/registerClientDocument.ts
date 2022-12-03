import Proccess from "../abstracts/process";
import DocumentTypeMenu from "../menus/documentTypeMenu";
import Cliente from "../models/client";
import RegisterCpf from "./registerCPF";
import registerPassport from "./registerPassport";
import RegisterRg from "./registerRg";

export default class RegisterClientDocument extends Proccess {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new DocumentTypeMenu()
        this.execution = true
    }

    Proccess(): void {
        console.log('Inciando o cadastro de documentos...')
        while (this.execution) {
            this.menu.show()
            this.option = this.receiver.receiveNumber('Qual opção desejada?')
            switch (this.option) {
                case 1:
                    this.proccess = new RegisterCpf(this.cliente)
                    this.proccess.Proccess()
                    break
                case 2:
                    this.proccess = new RegisterRg(this.cliente)
                    this.proccess.Proccess()
                    break
                case 3:
                    this.proccess = new registerPassport(this.cliente)
                    this.proccess.Proccess()
                    break
                case 0:
                    this.execution = false
                    break
                default:
                    console.log('Opção não compreendida :(')
            }
        }
    }
}
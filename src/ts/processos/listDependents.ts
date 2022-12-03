import Proccess from "../abstracts/process";
import Storage from "../domain/storage";
import DependentPrinter from "../printers/dependentPrinter";
import Impressor from "../interfaces/printer";
import Cliente from "../models/client";

export default class ListagemDependentes extends Proccess {
    private clients: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clients = Storage.UniqueInstance.Clients
    }
    Proccess(): void {
        console.clear()
        let RGTitular = this.receiver.receiveText("Digite o RG do Titular: ")

       this.clients.forEach(cliente => {
            cliente.Documents.filter(x => {
                if (x.Number === RGTitular) {
                  cliente.Dependents.forEach (dep => {
                    this.impressor = new DependentPrinter(dep)
                    console.log(this.impressor.print())
                  })
                }
            })
        })
    }
}
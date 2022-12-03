import Proccess from "../abstracts/process";
import Armazem from "../domain/storage";
import { DocumentType } from "../enumerators/documentType";
import EditClientMenu from "../menus/editClientMenu";
import Cliente from "../models/client";
import CadastrarDocumentosCliente from "./registerClientDocument";
import CadastroClienteTelefone from "./registerClientTelephone";
import EditarDataDeNascimento from "./Editar/editDateOfBirth";
import EditarDocumento from "./Editar/editDocument";
import EditarEndereco from "./Editar/editAddress";
import EditarNome from "./Editar/editName";
import EditarNomeSocial from "./Editar/editSocialName";
import EditarNumero from "./Editar/editTelephone";

export default class EditarCliente extends Proccess {
  private Clients: Cliente[];
  constructor() {
    super();
    this.execution = true;
    this.menu = new EditClientMenu();
    this.Clients = Armazem.UniqueInstance.Clients;
  }
  Proccess(): void {
    console.clear();
    let clienteCPF = this.receiver.receiveText(
      "Para começar a editar o cliente, digite o CPF: "
    );
    this.Clients.forEach((clienteForEach) => {
      clienteForEach.Documents.filter((clienteDocFilter) => {
        if (
          clienteDocFilter.Number === clienteCPF &&
          clienteDocFilter.DocumentType === DocumentType.CPF
        ) {
          while (this.execution) {
            this.menu.show();
            console.log(
              `Cliente Nome:'${clienteForEach.Name}'\nCliente Cpf:'${clienteDocFilter.Number}'`
            );
            this.option = this.receiver.receiveNumber(
              `Digite a opção desejada: `
            );
            switch (this.option) {
              case 1:
                this.proccess = new EditarNome(clienteForEach);
                this.proccess.Proccess();
                break;
              case 2:
                this.proccess = new EditarNomeSocial(clienteForEach);
                this.proccess.Proccess();
                break;
              case 3:
                this.proccess = new EditarDataDeNascimento(clienteForEach);
                this.proccess.Proccess();
                break;
              case 4:
                this.proccess = new EditarEndereco(clienteForEach);
                this.proccess.Proccess();
                break;
              case 5:
                this.proccess = new EditarDocumento(clienteForEach);
                this.proccess.Proccess();
                break;
              case 6:
                this.proccess = new EditarNumero(clienteForEach);
                this.proccess.Proccess();
                break;
              case 7:
                this.proccess = new CadastrarDocumentosCliente(clienteForEach);
                this.proccess.Proccess();
                break;
              case 8:
                this.proccess = new CadastroClienteTelefone(clienteForEach);
                this.proccess.Proccess();
                break;
              case 0:
                this.execution = false;
                console.log("Até logo!");
                console.clear();
                break;
              default:
                console.log("Opção não compreendida :(");
            }
          }
        }
      });
    });
  }
}
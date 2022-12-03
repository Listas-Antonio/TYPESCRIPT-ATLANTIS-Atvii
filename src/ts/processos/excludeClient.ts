import Proccess from "../abstracts/process";
import Storage from "../domain/storage";
import { DocumentType } from "../enumerators/documentType";
import Client from "../models/client";

export default class ExcluirCliente extends Proccess {
  private client: Client[];
  constructor() {
    super();
    this.client = Storage.UniqueInstance.Clients;
    this.execution = true;
  }
  Proccess(): void {
    while (this.execution) {
      if (this.client.length == 0) {
        console.log("Não há clientes para serem mostrados");
        this.execution = false;
      } else {
        this.client.forEach((clientesForEach) => {
          clientesForEach.Documents.forEach((docsForEach) => {
            console.log(
              `Nome: ${clientesForEach.Name}\n CPF: ${docsForEach.Number} `
            );
          });
        });
        this.client.forEach((clientesForEach) => {
          clientesForEach.Documents.forEach((docsForEach) => {
            let cpfNumber = this.receiver.receiveText("Digite o Numero do CPF");
            if (
              cpfNumber === docsForEach.Number &&
              DocumentType.CPF === docsForEach.DocumentType
            ) {
              let index = this.client.indexOf(clientesForEach);
              this.client.splice(index, 1);
              this.execution = false;
              console.log("Client excluido com sucesso");
              
            } else {
              console.log("Operação não compreendida :(");
              this.execution = false;
            }
          });
        });
      }
    }
  }
}
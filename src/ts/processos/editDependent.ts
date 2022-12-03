import Proccess from "../abstracts/process";
import Armazem from "../domain/storage";
import { DocumentType } from "../enumerators/documentType";
import EditDependentMenu from "../menus/editDependentMenu";
import Client from "../models/client";
import RegisterClientDocument from "./registerClientDocument";
import EditDateOfBirth from "./Editar/editDateOfBirth";
import EditDocument from "./Editar/editDocument";
import EditName from "./Editar/editName";
import EditSocialName from "./Editar/editSocialName";

export default class editDependent extends Proccess {
  private clients: Client[];
  constructor() {
    super();
    this.execution = true;
    this.menu = new EditDependentMenu();
    this.clients = Armazem.UniqueInstance.Clients;
  }
  Proccess(): void {
    console.clear();
    let holder = this.receiver.receiveText(
      `Digite o CPF do titular:`
    );
    console.log("Listagem dos clients dependentes...");
    this.clients.map((clientMap) => {
      clientMap.Documents.filter((docFilter) => {
        if (
          docFilter.Number === holder &&
          docFilter.DocumentType === DocumentType.CPF
        ) {
          clientMap.Dependents.forEach((dependentsForEach) => {
            dependentsForEach.Documents.forEach(
              (documentoDependentForEach) => {
                console.log(
                  `${dependentsForEach.Name} + ${documentoDependentForEach.Number}`
                );
              }
            );
            dependentsForEach.Documents.filter((dependenteFilter) => {
              let CPFEntry = this.receiver.receiveText(
                "Digite o CPF do dependente"
              );
              if (
                dependenteFilter.Number === CPFEntry &&
                dependenteFilter.DocumentType === DocumentType.CPF
              ) {
                while (this.execution) {
                  this.menu.show();
                  console.log(
                    `Client Nome:'${dependentsForEach.Name}'\nCliente Cpf:'${dependenteFilter.Number}'`
                  );
                  this.option = this.receiver.receiveNumber(
                    `Digite a opção desejada: `
                  );
                  switch (this.option) {
                    case 1:
                      this.proccess = new EditName(dependentsForEach);
                      this.proccess.Proccess();
                      break;
                    case 2:
                      this.proccess = new EditSocialName(dependentsForEach);
                      this.proccess.Proccess();
                      break;
                    case 3:
                      this.proccess = new EditDateOfBirth(
                        dependentsForEach
                      );
                      this.proccess.Proccess();
                      break;
                    case 4:
                      this.proccess = new EditDocument(dependentsForEach);
                      this.proccess.Proccess();
                      break;
                    case 4:
                      this.proccess = new RegisterClientDocument(
                        dependentsForEach
                      );
                      this.proccess.Proccess();
                      break;
                    case 0:
                      console.log("Até mais!");
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
      });
    });
  }
}
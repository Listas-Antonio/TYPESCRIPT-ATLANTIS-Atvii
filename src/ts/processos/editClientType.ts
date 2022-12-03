import Proccess from "../abstracts/process";
import EditClientTypeMenu from "../menus/editClientTypeMenu";
import EditClient from "./editClient";
import EditDependent from "./editDependent";

export default class EditClientType extends Proccess {
  constructor() {
    super();
    this.menu = new EditClientTypeMenu();
  }
  Proccess(): void {
    this.menu.show();
    this.option = this.receiver.receiveNumber("Qual opção desejada?");

    switch (this.option) {
      case 1:
        this.proccess = new EditClient();
        this.proccess.Proccess();
        break;
      case 2:
        this.proccess = new EditDependent();
        this.proccess.Proccess();
        break;
      default:
        console.log("Opção não compreendida :(");
    }
  }
}
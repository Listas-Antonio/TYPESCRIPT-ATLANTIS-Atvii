import Processo from "../abstracts/process";
import TelephoneTypeRegistrationMenu from "../menus/telephoneTypeRegistrationMenu";
import Client from "../models/client";
import RegisterTelephone from "./registerTelephone";

export default class CadastroClienteTelefone extends Processo {
  private client: Client;

  constructor(client: Client) {
    super();
    this.menu = new TelephoneTypeRegistrationMenu();
    this.client = client;
    this.execution = true;
  }

  Proccess(): void {
    console.log(`Iniciando o cadastro de Telefone`);
    while (this.execution) {
      this.menu.show();
      this.option = this.receiver.receiveNumber("Qual opção desejada?");
      switch (this.option) {
        case 1:
          this.proccess = new RegisterTelephone(this.client);
          this.proccess.Proccess();
          break;
        case 0:
          this.execution = false;
          break;
      }
    }
  }
}
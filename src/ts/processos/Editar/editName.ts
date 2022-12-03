import Proccess from "../../abstracts/process";
import Client from "../../models/client";

export default class editName extends Proccess {
  private client: Client;

  constructor(client: Client) {
    super();
    this.client = client;
  }
  Proccess() {
    let newName = this.receiver.receiveText("Digite o Nome: ");
    this.client.Name = newName;
  }
}
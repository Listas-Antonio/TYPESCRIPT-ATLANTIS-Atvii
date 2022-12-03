import Processo from "../../abstracts/process";
import Client from "../../models/client";

export default class EditarNomeSocial extends Processo {
  private client: Client;

  constructor(client: Client) {
    super();
    this.client = client;
  }
  Proccess() {
    let newName = this.receiver.receiveText("Digite o Nome Social: ");
    this.client.SocialName = newName;
  }
 }
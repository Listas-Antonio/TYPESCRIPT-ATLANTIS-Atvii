import Proccess from "../../abstracts/process";
import Client from "../../models/client";

export default class EditDateOfBirth extends Proccess {
  private client: Client;

  constructor(client: Client) {
    super();
    this.client = client;
  }
  Proccess() {
    let BirthDate = this.receiver.receiveDate("Digite a data de nascimento: ");
    this.client.BirthDate = BirthDate;
  }
}
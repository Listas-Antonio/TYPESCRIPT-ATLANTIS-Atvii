import Proccess from "../../abstracts/process";
import Client from "../../models/client";

export default class EditNumber extends Proccess {
  private client: Client;
  constructor(client: Client) {
    super();
    this.client = client;
  }
  Proccess() {
    console.clear();
    console.log(`Lista dos Telefones`);
    this.client.Telephones.forEach((i) => {
      console.log(`------------------------------`);
      console.log(`|  Telefone: ${i.Ddd} - ${i.Number} `);
      console.log(`------------------------------`);
    });
    let targetTelephone = this.receiver.receiveText(
      "Digite o numero do telefone no formato 'DDD NÚMERO' : "
    );
    let telephonesParts = targetTelephone.split(" ");
    this.client.Telephones.filter(
      (tell) => tell.Number == telephonesParts[1] && tell.Ddd === telephonesParts[0]
    ).forEach((novo) => {
      let tell = this.receiver.receiveText(
        `Por favor digite o número do telefone no padrão DDD NÚMERO:`
      );
      let telephonesParts = tell.split(" ");
      novo.Ddd = new String(telephonesParts[0].valueOf()).valueOf();
      novo.Number = new String(telephonesParts[1].valueOf()).valueOf();
    });
  }
}
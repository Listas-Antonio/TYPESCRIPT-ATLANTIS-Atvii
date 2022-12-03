import Proccess from "../../abstracts/process";
import Client from "../../models/client";

export default class EditDocument extends Proccess {
  private client: Client;
  constructor(client: Client) {
    super();
    this.client = client;
    this.execution = true;
  }
  Proccess() {
    console.clear();
    console.log(`Lista dos Documentos`);
    this.client.Documents.forEach((i) => {
      console.log(`------------------------------`);
      console.log(`|  Tipo do documento: ${i.DocumentType}`);
      console.log(`|  Número do documento: ${i.Number}`);
      console.log(`------------------------------`);
    });
    let document = this.receiver.receiveText("Digite o número do documento: ");
    this.client.Documents.filter((doc) => doc.Number == document).forEach(
      (novo) => {
        let newNumber = this.receiver.receiveText(
          "Nùmero atualizado do documento: "
        );
        let newDate = this.receiver.receiveDate("Nova data de expedição do documento: ");
        novo.Number = newNumber;
        novo.ShippingDate = newDate;
      }
    );
  }
}
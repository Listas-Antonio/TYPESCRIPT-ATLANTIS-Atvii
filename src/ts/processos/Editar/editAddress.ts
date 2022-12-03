import Proccess from "../../abstracts/process";
import Client from "../../models/client";
import Address from "../../models/address";

export default class EditAddress extends Proccess {
  private client: Client;

  constructor(client: Client) {
    super();
    this.client = client;
  }
  Proccess() {
    let street = this.receiver.receiveText("Digite o nome da rua?");
    let district = this.receiver.receiveText("Digite o nome do bairro?");
    let city = this.receiver.receiveText("Digite o nome da cidade?");
    let state = this.receiver.receiveText("Digite o nome do estado?");
    let country = this.receiver.receiveText("Digite o nome do país?");
    let zipCode = this.receiver.receiveText("Digite o código postal?");
    this.client.Address.District = district;
    this.client.Address.Street = street;
    this.client.Address.City = city;
    this.client.Address.State = state;
    this.client.Address.Country = country;
    this.client.Address.ZipCode = zipCode;
    this.client.Dependents.map(
      (clientAddress) =>
        (clientAddress.Address = this.client.Address as Address)
    );
  }
}
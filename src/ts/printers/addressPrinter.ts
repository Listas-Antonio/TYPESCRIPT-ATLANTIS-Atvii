import Impressor from "../interfaces/printer";
import Address from "../models/address";

export default class AddressPrinter implements Impressor {
    private address: Address
    constructor(address: Address) {
        this.address = address
    }
    print(): string {
        let impression = `| Address:\n`
            + `| rua: ${this.address.Street}\n`
            + `| bairro: ${this.address.District}\n`
            + `| cidade: ${this.address.City}\n`
            + `| estado: ${this.address.State}\n`
            + `| país: ${this.address.Country}\n`
            + `| código postal: ${this.address.Country}`
        return impression
    }
}
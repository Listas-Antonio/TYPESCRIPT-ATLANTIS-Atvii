import Menu from "../interfaces/menu";

export default class TelephoneTypeRegistrationMenu implements Menu {
  show(): void {
    console.clear();
    console.log(`********************************`);
    console.log(`| Escolha uma das opções abaixo `);
    console.log(`--------------------------------`);
    console.log(`| 1 - Novo Telefone`);
    console.log(`--------------------------------`);
    console.log(`| 0 - Proxima Etapa`);
  }
}
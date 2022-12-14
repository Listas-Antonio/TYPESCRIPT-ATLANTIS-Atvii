import Menu from "../interfaces/menu";

export default class EditDependentMenu implements Menu {
  show(): void {
    console.clear();
    console.log(`*********************************`);
    console.log(`| Qual informação deseja editar? `);
    console.log(`---------------------------------`);
    console.log(`| 1 - Nome`);
    console.log(`| 2 - Nome Social`);
    console.log(`| 3 - Data de Nascimento`);
    console.log(`| 4 - Documentos`);
    console.log(`---------------------------------`);
    console.log(`| 5 - Novos Documentos`);
    console.log(`| 0 - Para Sair`);
    console.log(`---------------------------------`);
  }
}
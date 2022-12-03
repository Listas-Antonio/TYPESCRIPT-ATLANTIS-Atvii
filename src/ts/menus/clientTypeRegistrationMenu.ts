import Menu from "../interfaces/menu";

export default class ClientTypeRegistrationMenu implements Menu {
    show(): void {
        console.clear()
        console.log(`****************************************`)
        console.log(`| Qual o tipo do cliente para cadastro? `)
        console.log(`----------------------------------------`)
        console.log(`| 1 - Titular`)
        console.log(`| 2 - Dependente`)
        console.log(`----------------------------------------`)
    }
}
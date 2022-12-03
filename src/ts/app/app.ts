import Proccess from "../abstracts/process";
import Receiver from "../io/receiver";
import Main from "../processos/main";

console.clear()
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis`);

let proccess: Proccess
let execution: Boolean = true
let receiver = new Receiver()

while (execution) {
    proccess = new Main()
    proccess.Proccess()
    execution = proccess.Execution
}
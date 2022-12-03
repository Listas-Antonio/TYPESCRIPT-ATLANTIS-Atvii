import Menu from "../interfaces/menu"
import Receiver from "../io/receiver"

export default abstract class Proccess {
    protected option!: number
    protected menu!: Menu
    protected receiver = new Receiver()
    protected proccess!: Proccess
    protected execution!: boolean
    public get Execution(){
        return this.execution
    }
    abstract Proccess(): void
}
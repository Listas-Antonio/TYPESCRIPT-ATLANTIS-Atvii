import Prototype from "../interfaces/prototype"

export default class Telephone implements Prototype {
    private ddd: string
    private number: string
    constructor(ddd: string, number: string) {
        this.ddd = ddd
        this.number = number
    }
    public get Ddd() { return this.ddd }
    public get Number() { return this.number }

    public set Ddd(ddd: string) {
        this.ddd = ddd
    }
    public set Number(number: string) {
        this.number = number
    }

    clone(): Prototype {
        let telephone = new Telephone(this.ddd, this.number)
        return telephone
    }
}
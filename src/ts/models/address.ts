import Prototype from "../interfaces/prototype"

export default class Address implements Prototype {
    private street: string
    private district: string
    private city: string
    private state: string
    private country: string
    private zipCode: string

    constructor(street: string, district: string, city: string, state: string, country: string, zipCode: string) {
        this.street = street
        this.district = district
        this.city = city
        this.state = state
        this.country = country
        this.zipCode = zipCode
    }

    public get Street() {return this.street}
    public get District() {return this.district}
    public get City() {return this.city}
    public get State() {return this.state}
    public get Country() {return this.country}
    public get ZipCode() {return this.zipCode}

    public set Street(street: string) {
        this.street = street
    }
    public set District(district: string) {
        this.district = district
    }
    public set City(city: string) {
        this.city = city
    }
    public set State(state: string) {
        this.state = state
    }
    public set Country(country: string) {
        this.country = country
    }
    public set ZipCode(zipCode: string) {
        this.zipCode = zipCode
    }

    public clone(): Prototype {
        let address = new Address(this.street, this.district, this.city, this.state, this.country, this.zipCode)
        return address
    }
}
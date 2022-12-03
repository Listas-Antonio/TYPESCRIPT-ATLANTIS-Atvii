import Document from "./document"
import Address from "./address"
import Telephone from "./telephone"

export default class Client {
    private name: string
    private socialName: string
    private birthDate: Date
    private registrationDate: Date
    private telephones: Telephone[] = []
    private address!: Address
    private documents: Document[] = []
    private dependents: Client[] = []
    private holder!: Client

    constructor(name: string, socialName: string, birthDate: Date) {
        this.name = name
        this.socialName = socialName
        this.birthDate = birthDate
        this.registrationDate = new Date()
    }

    public get Name() { return this.name }
    public get SocialName() { return this.socialName }
    public get BirthDate() { return this.birthDate }
    public get RegistrationDate() { return this.registrationDate }
    public get Telephones() { return this.telephones }
    public get Address() { return this.address }
    public get Documents() { return this.documents }
    public get Dependents() { return this.dependents }
    public get Holder() { return this.holder }

    public set Address(address: Address) { this.address = address }
    public set BirthDate(birthDate: Date) { this.BirthDate = birthDate }
    public set Name(name: string) { this.Name = name }
    public set SocialName(socialName: string) { this.SocialName = socialName }
    public set Telephones(telephones: Telephone[]) { this.Telephones = telephones }
    public set Documents(documents: Document[]) { this.Documents = documents }
}
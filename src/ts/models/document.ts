import { DocumentType } from "../enumerators/documentType"

export default class Document {
    private number: string
    private documenttype: DocumentType
    private shippingDate: Date

    constructor(number: string, documenttype: DocumentType, shippingDate: Date) {
        this.number = number
        this.documenttype = documenttype
        this.shippingDate = shippingDate
    }

    public get Number(){
        return this.number
    }
    public get DocumentType(){
        return this.documenttype
    }
    public get ShippingDate(){
        return this.shippingDate
    }
    
    public set Number(number: string) {
        this.number = number
    }
    public set ShippingDate(shippingDate: Date) {
        this.shippingDate = shippingDate
    }
}
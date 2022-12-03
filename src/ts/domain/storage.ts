import Client from "../models/client";

export default class Storage {
    private static uniqueInstance: Storage = new Storage()
    private clients: Client[] = []
    private constructor() { }
    public static get UniqueInstance() {
        return this.uniqueInstance
    }
    public get Clients() {
        return this.clients
    }
}
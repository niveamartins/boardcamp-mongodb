import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/"

const client = new MongoClient(url);

await client.connect()


export { client }
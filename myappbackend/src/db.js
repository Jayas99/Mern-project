import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://jaya01:Atlas123@cluster0.bgjoit6.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("mernstack");
    cb();
}

export {db,connectToDB};

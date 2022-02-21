import * as mongoDB from "mongodb";

const DB_CONN_STRING = process.env.DB_CONN_STRING;
const BROXAS_COLLECTION_NAME = process.env.BROXAS_COLLECTION_NAME;

let cachedClient: any = null;
let cachedDb: any = null;

export async function connectToDatabase() {
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
        client: cachedClient,
        db: cachedDb,
    };
  }

  if (!DB_CONN_STRING) {
    throw new Error('Define the DB_CONN_STRING environmental variable');
  }

  if (!BROXAS_COLLECTION_NAME) {
    throw new Error('Define the BROXAS_COLLECTION_NAME environmental variable');
  }

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(DB_CONN_STRING);
  await client.connect();
  const db: mongoDB.Db = client.db(process.env.DB_NAME);
  const collections: mongoDB.Collection = db.collection(BROXAS_COLLECTION_NAME);
     
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${collections.collectionName}`);
  return {
    client,
    db,
  };
}
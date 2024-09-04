const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb://localhost:27017/students";


let client;
async function connectToDatabase(){
    try {
        
         client = await MongoClient.connect(connectionString);
         console.log("connetectd to database")
        
        return client;

    } catch (error) {
        console.error('Error connecting to the database:', error);
          throw error;
    }
        
}

async function getDatabaseClient() {
    if (!client) {
      await connectToDatabase();
    }
    return client.db("abc");
  }
  
  module.exports = { getDatabaseClient , connectToDatabase};
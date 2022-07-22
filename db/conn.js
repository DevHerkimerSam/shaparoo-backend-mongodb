const { MongoClient } = require("mongodb");
const url = process.env.URI;
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
const dbName = 'shaparoodb'

module.exports = {
  connectToServer: async function () {
    await client.connect();
    const db = client.db(dbName);
    if (db) {
      _db = db;
    } else {
      console.log('Error connecting to database.');
    }
  },
 
  getDb: function () {
    return _db;
  },
};
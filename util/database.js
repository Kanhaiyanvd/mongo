const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback =>{
  MongoClient.connect(
    'mongodb+srv://kanhare171:Kanha123@cluster0.gvkswpe.mongodb.net/'
  )
   .then(client =>{
    console.log('Connected!');
    _db = client.db();
    callback();
   })
   .catch(err =>{
    console.log(err);
    throw err;
   });
};

const getDb = () =>{
  if(_db) {
    return _db
  }
  throw 'No databse founnd'
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;




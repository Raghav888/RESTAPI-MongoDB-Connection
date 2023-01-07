var mongo = require('mongodb');

const { MongoClient } = require('mongodb');

const uri =
  'mongodb+srv://rbang:Raghav@883@cluster0.d562r8h.mongodb.net/test'

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


getAll = async (req, res) => {
  const result  = await mongodb.getDb().db('cse341-project').collection('contacts').find();
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(contacts)
  })
};

getSingle = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result  = await mongodb.getDb().db('cse341-project').collection('contacts').find({ _id: contactId});
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(contacts[0])
  })
};

module.exports = { getAll, getSingle };

const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


getAll = async (req, res) => {
  const result  = await mongodb.getDb().db('users').collection('users').find();
  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(users)
  })
};

getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result  = await mongodb.getDb().db('users').collection('users').find({ _id: userId});
  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(users[0])
  })
};

module.exports = { getAll, getSingle };

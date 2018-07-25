var db = require('../../config/database');

var api = {};


api.list = function(req, res) {

    db.find({}).exec(function(err, doc) {
      if (err) return console.log(err);
      res.json(doc);
  });
};

api.insert = function(req, res){
    db.remove({}, { multi: true }, function (err, numRemoved) {
    });

    db.insert(req.body.score, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Successfully synched: ' + newDoc._id);
        res.json({});
    });
}

module.exports = api;

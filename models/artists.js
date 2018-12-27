var ObjectID = require('mongodb').ObjectID;
var db = require('../db');

class ArtistsModel {
	constructor(){}


	all(cb) {
		db.get().collection('artists').find().toArray(function(err, docs) {
			cb(err, docs);
		});
	};

	findById(id, cb) {
		db.get().collection('artists').findOne({_id: ObjectID(id)}, function(err, doc) {
			cb(err, doc);
		});
	};

	create(artist, cb) {
		db.get().collection('artists').insert(artist, function(err, result) {
			cb(err, result);
		});
	};

	update(id, newData, cb) {
		db.get().collection('artists').updateOne(
			{_id: ObjectID(id)},
			newData,
			function(err, result) {
				cb(err, result);
			}
		);
	};

	delete(id, cb) {
		db.get().collection('artists').deleteOne(
			{_id: ObjectID(id)},
			function(err, result) {
				cb(err, result);
			}
		);
	};
}

module.exports = new ArtistsModel();

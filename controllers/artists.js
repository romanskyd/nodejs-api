var Artists = require('../models/artists');

class ArtistsController {
	constructor(){}

	all(req, res) {
		Artists.all(function(err, docs) {
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.send(docs);
		});
	};

	findById(req, res) {
		Artists.findById(req.params.id, function(err, doc) {
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.send(doc);
		});
	};

	create(req, res) {
		var artist = {
			name: req.body.name
		};
		Artists.create(artist, function(err, result) {
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.send(artist);
		});
	};

	update(req, res) {
		Artists.update(
			req.params.id,
			{name: req.body.name},
			function(err, result) {
				if (err) {
					console.log(err);
					return res.sendStatus(500);
				}
				res.sendStatus(200);
			}
		);
	};

	delete(req, res) {
		Artists.delete(
			req.params.id,
			function(err, result) {
				if (err) {
					console.log(err);
					return res.sendStatus(500);
				}
				res.sendStatus(200);
			}
		);
	};

}

module.exports = new ArtistsController();
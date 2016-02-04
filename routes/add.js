var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var friendName = req.query.name;
	var friendDescription = req.query.description;
	var newFriend = {"name": friendName, "description": friendDescription, "imageURL": "http://lorempixel.com/500/500/people"};
	console.log(newFriend);
	data["friends"].push(newFriend);
	console.log(data);
	res.render('newfriend', data);
 }
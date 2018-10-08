const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Temporary Model
const PeerSchema = new Schema({
	name: String,
	age: Number,
	program: String,
});

module.exports = mongoose.model('Peer', PeerSchema);

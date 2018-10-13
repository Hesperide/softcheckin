const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeerSchema = new Schema({
	name: String,
	age: Number,
	program: String,
	lastCheckIn: Number,
	userId: String,
});

module.exports = mongoose.model('Peer', PeerSchema);

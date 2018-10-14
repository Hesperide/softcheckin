const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
	contents: String,
	expType: Number, //TODO
	userId: String, //Not sure if really necessary.
	peerId: String,
	created: Date,
});

module.exports = mongoose.model('Entry', EntrySchema);

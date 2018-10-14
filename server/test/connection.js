const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to database before running tests. Probably want this in a testing directory.
before( (done) => {	
	// Mongo database currently local. Port to cloud later, use Azure Cosmos DB.
	mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true });
	mongoose.connection.once('open', () => { console.log('connected to database'); }).on('error', (err) => { console.log(err); });
	done();
});

// Currently fails, Peers not recognized.
/*
beforeEach((done) => {
	//Drop the collection
	mongoose.connection.collections.Peers.drop( () => {
		done();
	});
});
*/

const assert = require('assert');

// Describe a set of tests
describe('Saving Tests', () => {
	
	//Set of tests below
	//Individual test
	it('Saving a record to the database', (done) => {
		assert(true);
		var peer = new Peer({
			name:"Alex",
			age:21,
			program"Computer Science",
		});
		peer.save().then( () => {
			assert(peer.isNew === false);
			done();
		});
	});
});


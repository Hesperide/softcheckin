const hapi = require('hapi');
const mongoose = require('mongoose');

// Mongo database currently local. Port to cloud later, use Azure Cosmos DB.
mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true });
mongoose.connection.once('open', () => { console.log('connected to database'); }).on('error', (err) => { console.log(err); });

const server = hapi.server({
	port: 8000,
	host: 'localhost'
});


const init = async () => {
	server.route({
		method: 'GET',
		path: '/',
		handler: (request, reply) => {
			return `<h1>My modern api</h1>`;
		}
	});
	
	await server.start();
	console.log(`Server running at: ${server.info.uri}`);
};

init();

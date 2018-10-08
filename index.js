const hapi = require('hapi');
const mongoose = require('mongoose');
const Peer = require('./models/Peer');

const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi');
const schema = require('./graphql/schema');

// ES6 Promises
mongoose.Promise = global.Promise;

// Mongo database currently local. Port to cloud later, use Azure Cosmos DB.
mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true });
mongoose.connection.once('open', () => { console.log('connected to database'); }).on('error', (err) => { console.log(err); });

const server = hapi.server({
	port: 8000,
	host: 'localhost'
});


const init = async () => {

	//Using Apollo Server 1.3.4 for GraphiQL support.
	//To use Apollo 2.0+, need to migrate to GraphQL Playground.
	await server.register({
		plugin: graphiqlHapi,
		options: {
			path: '/graphiql',
			graphiqlOptions: {
				endpointURL: '/graphql'
			},
			route: {
				cors: true
			}
		}
	});
	await server.register({
		plugin: graphqlHapi,
		options: {
			path: '/graphql',
			graphqlOptions: {
				schema
			},
			route: {
				cors: true
			}
		}
	});

	server.route([
		{
			method: 'GET',
			path: '/',
			handler: (request, reply) => {
				return `<h1>My modern api</h1>`;
			}
		},
		{
			method: 'GET',
			path: '/api/v1/peers',
			handler: (req, reply) => {
				return Peer.find();
			}
		},
		{
			method: 'POST',
			path: '/api/v1/peers',
			handler: (req, reply) => {
				const { name, age, program } = req.payload;
				const peer = new Peer({
					name,
					age,
					program
				});
				return peer.save();
			}
		},
	]);
	
	await server.start();
	console.log(`Server running at: ${server.info.uri}`);
};

init();

const hapi = require('hapi');
const mongoose = require('mongoose');
const Peer = require('./models/Peer');
const User = require('./models/User');
const Entry = require('./models/Entry');
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi');

const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

// ES6 Promises
mongoose.Promise = global.Promise;

// Mongo database currently local. Port to cloud later, use Azure Cosmos DB.
mongoose.connect('mongodb://localhost/softcheckin', { useNewUrlParser: true });
mongoose.connection.once('open', () => { console.log('connected to database'); }).on('error', (err) => { console.log(err); });

const server = hapi.server({
	port: 3001,
	host: 'localhost'
});

const executableSchema = makeExecutableSchema({
	typeDefs: [schema],
	resolvers: resolvers( { Peer, User, Entry } ),
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
				schema: executableSchema
			},
			route: {
				cors: true
			}
		}

	});
	//TODO Auth
	//Obsolete, can remove since /graphql endpoint and HTML will be hosted from client project.
	server.route([
		{
			method: 'GET',
			path: '/',
			handler: (request, reply) => {
				return `<h1>My modern api</h1>`;
			}
		},
	]);
	
	await server.start();
	console.log(`Server running at: ${server.info.uri}`);
};

init();

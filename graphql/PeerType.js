const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const PeerType = new GraphQLObjectType({
	name: 'Peer',
	fields: () => ({
		id: { type: GraphQLString },
		age: { type: GraphQLInt },
		program: { type: GraphQLString },
	})
});

module.exports = PeerType;

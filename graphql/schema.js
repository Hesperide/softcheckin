const graphql = require('graphql');
const PeerType = require('./PeerType');
const Peer = require('./../models/Peer');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema
} = graphql

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		peer: {
			type: PeerType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args){
				return Peer.findById(args.id);
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});

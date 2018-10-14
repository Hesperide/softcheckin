const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const resolvers = (models) => ({
	Query: {
		users(){
			return models.User.find().then((response) => response);
		},
		peers(){
			return models.Peer.find().then((response) => response);
		},
		entries(){
			return models.Entry.find().then((response) => response);
		},
		getPeerById(parent, { id }){
			return models.Peer.findById(id).then((response) => response);
		},

		getPeerByName(parent, { userId, name }){
			return models.Peer.findOne({ userId: userId, name: name}).then((response) => response);
		},
		getMyPeers(parent, { userId }){
			return models.Peer.find({ userId: userId }).sort('lastCheckIn').then((response) => response);
		},
		getPeerEntries(parent, { peerId }){
			return models.Entry.find({ peerId: peerId }).then((response) => response);
		},
	},
	Mutation: {
		createUser(parent, args){
			const user = new models.User(args);
			return user.save().then((response) => response);
		},
		createPeer(parent, args){
			const peer = new models.Peer(args);
			peer.lastCheckIn = new Date();
			return peer.save().then((response) => response);
		},
		createEntry(parent, args){
			const entry = new models.Entry(args);
			entry.created = new Date();
			const peer = models.Peer.findByIdAndUpdate(args.peerId, { $set: { lastCheckIn: entry.created } }).then(response => response);
			console.log(peer);
			return entry.save().then((response) => response);
		},
		deleteUser(parent, args){
			return models.User.deleteOne( { _id: args.userId }).then( () => true);
		},
		deletePeer(parent, args){
			return models.Peer.deleteOne( { _id: args.peerId }).then( () => true);
		},
		deleteEntry(parent, args){
			return models.Entry.deleteOne( { _id: args.entryId }).then( () => true);
		}
	},
	Date: new GraphQLScalarType({
		name: 'Date',
		description: 'Date custom scalar type',
		parseValue(val){
			return new Date(val);
		},
		serialize(val){
			return val.getTime();
		},
		parseLiteral(ast){
			if (ast.kind === Kind.INT) {
				return new Date(ast.value);
			}
			return null;
		},
	}),
});

module.exports = resolvers;

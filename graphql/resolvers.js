const resolvers = (models) => ({
	Query: {
		getPeerById(parent, { id }){
			return models.Peer.findById(id).then((response) => response);
		},

		getPeerByName(parent, { name }){
			return models.Peer.findOne({name}).then((response) => response);
		},
	},
	Mutation: {
		createPeer(parent, args){
			const peer = new models.Peer(args);
			return peer.save().then((response) => response);
		},
	},
});

module.exports = resolvers;

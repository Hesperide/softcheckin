const prepare = (o) => {
  o._id = o._id.toString()
  return o
}


const resolvers = (models) => ({
	Query: {
		users(){
			return models.User.find().then((response) => response.map(prepare));
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
			return models.Peer.find({ userId: userId }).then((response) => response);
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
			return peer.save().then((response) => response);
		},
		//Need to update peer last check in when submitting new entry. TODO
		createEntry(parent, args){
			const entry = new models.Entry(args);
			return entry.save().then((response) => response);
		},
	},
});

module.exports = resolvers;

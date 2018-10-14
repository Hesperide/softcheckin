const schema = `
	scalar Date
	type Peer {
		_id: String!
		name: String!
		age: Int!
		program: String!
		lastCheckIn: Date
		userId: String!
	}

	type User {
		_id: String!
		name: String!
		email: String!
	}

	type Entry {
		_id: String!
		contents: String!
		expType: Int!
		peerId: String!
		userId: String!
		created: Date!
	}

	type Query {
		users: [User]
		peers: [Peer]
		entries: [Entry]
		getMyPeers(userId: String!): [Peer]
		getPeerEntries(peerId: String!): [Entry]
		getPeerByName(userId: String!, name: String!): Peer
		getPeerById(peerID: String!): Peer
	}

	type Mutation {
		createUser(name: String!, email: String!): User
		createPeer(userId: String!, name: String!, age: Int!, program: String!): Peer
		createEntry(peerId: String!, userId: String!, contents: String!, expType: Int) : Entry
		deleteUser(userId: String!): Boolean
		deletePeer(peerId: String!): Boolean
		deleteEntry(entryId: String!): Boolean
	}

	schema {
		query : Query
		mutation : Mutation
	}
	`;

module.exports = schema

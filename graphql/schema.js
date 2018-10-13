const schema = `

	type Peer {
		_id: String!
		name: String!
		age: Int!
		program: String!
		lastCheckIn: Int
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
		exptype: Int!
		peerId: String!
		userId: String!
	}

	type Query {
		users: [User]
		peers: [Peer]
		entries: [Entry]
		getMyPeers(id: String!): [Peer]
		getPeerEntries(id: String!): [Entry]
		getPeerByName(userId: String!, name: String!): Peer
		getPeerById(peerID: String!): Peer
	}

	type Mutation {
		createUser(name: String!, email: String!): User
		createPeer(id: String!, name: String!, age: Int!, program: String!): Peer
		createEntry(id: String!, contents: String!, exptype: Int) : Entry
		
	}

	schema {
		query : Query
		mutation : Mutation
	}
	`;

module.exports = schema

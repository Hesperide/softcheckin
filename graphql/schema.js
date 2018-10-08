const schema = `
	type Peer {
		id: ID!
		name: String!
		age: Int!
		program: String!
	}

	type Query {
		getPeerById(id: ID!): Peer
		getPeerByName(name: String!): Peer
	}

	type Mutation {
		createPeer(name: String!, age: Int!, program: String!): Peer
	}

	schema {
		query : Query
		mutation : Mutation
	}
	`;

module.exports = schema

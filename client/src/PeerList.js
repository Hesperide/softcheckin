import React, { Component } from 'react'
import Peer from './Peer'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const PEER_QUERY = gql`
	query PeerQuery($userId: String!){
		getMyPeers(userId: $userId){
			_id
			name
			program
			age
			lastCheckIn
		}
	}
`


class PeerList extends Component {
	render(){
		const userId = String(this.props.userId);
		return (
			<Query query={PEER_QUERY} variables={ {userId} } >
			{({ loading, error, data }) => {
				if (loading) return <div>Fetching</div>
				if (error) console.log(error);
				console.log(data['getMyPeers']);
				return(
					<div>
						{data['getMyPeers'].map(peer => <Peer key={peer._id} peer={peer}/>)}
					</div>
				)
			}}
			</Query>
		);
	}
}

export default PeerList

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
			userId
		}
	}
`


class PeerList extends Component {
	render(){
		const userId = String(this.props.userId);
		return (
		<div>
			<Query query={PEER_QUERY} variables={ {userId} } >
			{({ loading, error, data }) => {
				if (loading) return <div>Fetching</div>
				if (error) console.log(error);
				return(
					<table className="table">
						<thead>
						<tr>
							<th>Name</th>
							<th>Age</th>
							<th>Program</th>
							<th>Last Check In</th>
							<th>Notes</th>
						</tr>
						</thead>
						{data['getMyPeers'].map(peer => <Peer key={peer._id} peer={peer}/>)}
					</table>
				)
			}}
			</Query>
		</div>
		);
	}
}

export default PeerList

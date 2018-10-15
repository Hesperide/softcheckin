import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Entry from './Entry'

const ENTRY_QUERY = gql`
	query EntryQuery($peerId: String!){
		getPeerEntries(peerId: $peerId){
			_id
			contents
			expType
			created
		}
	}
`


class EntryList extends Component {
	render(){
		const peerId = String(this.props.peerId);
		return (
		<div>
			<Query query={ENTRY_QUERY} variables={ {peerId} } >
			{({ loading, error, data }) => {
				if (loading) return <div>Fetching</div>
				if (error) console.log(error);
				console.log(data['getPeerEntries']);
				if(data['getPeerEntries'].length > 0){
					return(
					<table className="table" style={{marginTop:"50px" }}>
						<thead>
						<tr>
							<th>Created At</th>
							<th>Contents</th>
							<th>Experience Type</th>
						</tr>
						</thead>
						{data['getPeerEntries'].map(entry => <Entry key={entry._id} entry={entry}/>)}
					</table>
					
					)
				} else{
					return(
					<div>
					<hr />
					<p>
						No entries.
					</p>
					</div>);
				}
			}}
			</Query>
		</div>
		);
	}
}

export default EntryList

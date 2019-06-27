import React from 'react';
import { deleteFriend } from '../../actions/friend';
import { connect } from 'react-redux';

class Friend extends React.Component {
    
    render() {
    return ( 
        <ul>  
        <h1>{this.props.friend.name}</h1>
        <button onClick={() => this.props.deleteFriend(this.props.friend.id)}>
            Delete
        </button>
    </ul>
)}
};

const mapStateToProps = () => {
    return {}
}

export default connect(
    mapStateToProps,
    { deleteFriend }
)(Friend);
import React from 'react';
import { connect } from 'react-redux';

import FriendList from './FriendList';
import FriendForm from './FriendForm';
import { getFriend } from '../../actions/friend';

class Friends extends React.Component {

    componentDidMount() {
        this.props.getFriend();
    }

    render() {
    return (    
        <div>
            <FriendForm friend={this.props.friend} />
            <FriendList friend={this.props.friend} />
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friend: state.addFriend.friend,
        addingFriend: state.addFriend.addingFriend
}
}

    export default connect(
        mapStateToProps,
        { getFriend }
    )(Friends);

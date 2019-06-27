import React from 'react';
import { deleteBill } from '../../actions/bill';
import { connect } from 'react-redux';

class Bill extends React.Component {
    
    render() {
        console.log(this.props.bill)
    return (
        <div className='bill'>
        <p>You went out to {this.props.bill.resturant} with {this.props.bill.numofFriend} friends, and spent ${this.props.bill.total}!</p>
        <p>Everyone owes {this.props.bill.split}</p>
        
        <button onClick={() => this.props.deleteBill(this.props.bill.id)}>
            Delete
        </button> 
    </div>
)}}

const mapStateToProps = () => {
    return {}
}

export default connect(
    mapStateToProps,
    { deleteBill }
)(Bill);
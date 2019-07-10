import React from 'react';
import { connect } from 'react-redux';

import BillList from './BillList';
import { getBill } from '../../actions/bill';

class Bills extends React.Component {

    componentDidMount() {
        this.props.getBill();
    }

    render() {
        console.log("OVER HERE", this.props.bill)
    return (    
        <div>
            <BillList bill={this.props.bill} />
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        bill: state.addBill.bill,
        addingFriend: state.addBill.addingBill
}
}

    export default connect(
        mapStateToProps,
        { getBill }
    )(Bills);

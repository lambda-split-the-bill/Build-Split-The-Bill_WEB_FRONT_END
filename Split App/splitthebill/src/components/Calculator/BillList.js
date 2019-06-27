import React from 'react';

import Bill from './Bill';

const BillList = props => {
    return (
        <div>
        <h2>Recent Activity</h2>
        <ul>
            {props.bill.map(bill => {
            return <Bill
                bill={bill} 
                key={bill.id} /> 
        })}
    </ul>
    </div>
    )
}

export default BillList;

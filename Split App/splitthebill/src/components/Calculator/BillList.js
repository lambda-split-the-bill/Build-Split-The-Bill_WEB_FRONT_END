import React from 'react';
import styled from 'styled-components';

import Bill from './Bill';

const BillListul = styled.ul`
    padding: 0;
`
const BillList = props => {
    return (
        <div>
        <BillListul>
            {props.bill.map(bill => {
            return <Bill
                bill={bill} 
                key={bill.id} /> 
        })}
    </BillListul>
    </div>
    )
}

export default BillList;

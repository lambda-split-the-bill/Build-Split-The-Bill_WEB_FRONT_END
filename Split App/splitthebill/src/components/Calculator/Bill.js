import React from 'react';
import { deleteBill } from '../../actions/bill';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DeleteButton = styled.button`
    margin: 0px 25px 0px 0px;
    text-decoration: none;
    color: black;
    text-align: center;
    font-size: .8rem;
    background-color: #ffc038;
    padding: 8px 10px;
    border-radius: 5px;
    font-weight: 100;
    border: none;
    max-width: 120px;
    cursor: pointer;
`

const BillDiv = styled.div`
    display: flex;
    max-width: 800px;
    max-height: 400px;
    flex-direction: column;
`

class Bill extends React.Component {
    
    render() {
        console.log(this.props.bill)
    return (
        <BillDiv>
        <p>{this.props.bill.numofFriend} of you went to {this.props.bill.resturant} and spent ${this.props.bill.total}!</p>
        <p>Everyone owes ${this.props.bill.split}</p>
        
        <DeleteButton onClick={() => this.props.deleteBill(this.props.bill.id)}>
            Delete
        </DeleteButton> 
    </BillDiv>
)}}

const mapStateToProps = () => {
    return {}
}

export default connect(
    mapStateToProps,
    { deleteBill }
)(Bill);
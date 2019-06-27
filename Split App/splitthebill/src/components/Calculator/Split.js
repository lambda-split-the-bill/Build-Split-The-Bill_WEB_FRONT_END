import React from 'react';
import { addBill } from '../../actions/bill';
import { connect } from 'react-redux';
import styled from 'styled-components'

const SplitInput = styled.input`
    outline: none;
    width: 350px;
    font-size: 28px;
    margin-right: 10%;
    background-color: #ffc038;
    border-style: none;
    border-bottom: 2px black solid;
    margin-bottom: 12px;
`

const SplitButton = styled.button`
height: 28px;
width: 350px;
background-color: #2c3338;
color: white;
border-style: none;
border-radius: 4px;
    &:hover {
        background-color: #ffc038;
        border: 2px black solid;
        cursor: pointer;
}     
`

const AddButton = styled.button`
    margin-left: 120px;
    height: 28px;
    width: 150px;
    background-color: #2c3338;
    color: white;
    border-style: none;
    border-radius: 4px;
    &:hover {
        background-color: #ffc038;
        border: 2px black solid;
        cursor: pointer;
}     
`

const SplitDiv = styled.div`
    display: flex;
    align-items: center;
    max-width: 350px;
`

const Splitheader = styled.h2`
    margin: 0;
    max-width: 200px;
`

class Split extends React.Component {
    constructor() {
        super();
        this.state = {
            bill: {
                resturant: '',
                numofFriend: '',
                total: '',
                split: ''
}};
} 

    splitBill = e => {
        e.preventDefault();
        if(this.state.bill.total > 0 && this.state.bill.numofFriend > 0) {
        this.setState({ 
            bill: {
                ...this.state.bill,
                split: parseFloat(Math.round((this.state.bill.total / this.state.bill.numofFriend) * 100) / 100).toFixed(2) }}) 
        } else {
            alert('Check Input Again!')
        }
};

    handleChange = e => {
        this.setState({
            bill: {
            ...this.state.bill,
            [e.target.name]: e.target.value
}});
};

    handleSubmit = () => {
        this.props.addBill(this.state.bill)
        this.setState({
            bill: {
                resturant: '',
                numofFriend: '',
                total: '',
                split: ''
        }}) 
        this.props.history.push('/')
};

    handleModal = e => {
        e.preventDefault()
        this.handleSubmit();
        this.props.onHide();
    }

    render(){
        console.log(this.state.bill)
        return(
            <div className='calculator'>
                
                <form onSubmit={this.splitBill}>
                    <h2>Add A Bill</h2>

                    <SplitInput
                    placeholder='Where did you eat?'
                    type='text'
                    name='resturant'
                    value={this.state.bill.resturant}
                    onChange={this.handleChange} />
                    
                    <SplitInput
                    step='any'
                    placeholder='How many friends?'
                    name='numofFriend'
                    type='number'
                    value={this.state.bill.numofFriend}
                    onChange={this.handleChange} />
                    
                    <SplitInput
                    step='any'
                    placeholder='Total cost'
                    name='total'
                    type='number'
                    value={this.state.bill.total} 
                    onChange={this.handleChange} />
                    
                    <SplitButton type='submit'>Split!</SplitButton>
                </form>
                
                <h2>Everyone should pay...</h2>
                <SplitDiv>
                <Splitheader>${this.state.bill.split}</Splitheader>
                <AddButton onClick={this.handleModal} >
                        Add
                </AddButton>
                </SplitDiv>

            </div>
        )
    }
}

export default connect(
    null,
    { addBill }
)(Split);
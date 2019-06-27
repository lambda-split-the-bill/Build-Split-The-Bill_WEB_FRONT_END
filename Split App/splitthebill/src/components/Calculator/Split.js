import React from 'react';
import { addBill } from '../../actions/bill';
import { connect } from 'react-redux';

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
                split: '$'+ parseFloat(Math.round((this.state.bill.total / this.state.bill.numofFriend) * 100) / 100).toFixed(2) }}) 
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

                    <h2>Where did you eat?</h2>
                    <input
                    type='text'
                    name='resturant'
                    value={this.state.bill.resturant}
                    onChange={this.handleChange} />
                    
                    <h2>How many friends tagged along?</h2>
                    <input
                    step='any'
                    placeholder='0'
                    name='numofFriend'
                    type='number'
                    value={this.state.bill.numofFriend}
                    onChange={this.handleChange} />
                    
                    <h2>How much was the total?</h2>
                    <input
                    step='any'
                    placeholder='0.00'
                    name='total'
                    type='number'
                    value={this.state.bill.total} 
                    onChange={this.handleChange} />
                    
                    <button type='submit'>Split!</button>
                </form>
                
                <h2>Everyone should pay...</h2>
                <h2>{this.state.bill.split}</h2>
                <button onClick={this.handleModal} >
                        Add
                </button>

            </div>
        )
    }
}

export default connect(
    null,
    { addBill }
)(Split);
import React from 'react';

class Split extends React.Component {
    constructor() {
        super();
        this.state = {
            resturant: '',
            num1: '',
            num2: '',
            total: ''
};
} 

    splitBill = e => {
        e.preventDefault();
        if(this.state.num2 > 0 && this.state.num1 > 0) {
        this.setState({ total: '$'+ parseFloat(Math.round((this.state.num2 / this.state.num1) * 100) / 100).toFixed(2) })
        } else {
            alert('Check Input Again!')
        }
        
};

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
};

    
    render(){
        console.log('num1 =', this.state.num1, 'num2 = ',this.state.num2)
        return(
            <div className='calculator'>
                
                <form onSubmit={this.splitBill}>
                    <h2>Where did you eat?</h2>
                    <input
                    type='text'
                    name='resturant'
                    value={this.state.resturant}
                    onChange={this.handleChange} />
                    
                    <h2>How many friends tagged along?</h2>
                    <input
                    placeholder='0'
                    name='num1'
                    type='number'
                    value={this.state.num1}
                    onChange={this.handleChange} />
                    
                    <h2>How much was the total?</h2>
                    <input
                    step='any'
                    placeholder='0.00'
                    name='num2'
                    type='number'
                    value={this.state.num2} 
                    onChange={this.handleChange} />
                    
                    <button type='submit'>Split!</button>
                </form>
                
                <h2>Everyone should pay...</h2>
                <h2>{this.state.total}</h2>
            </div>
        )
    }
}

export default Split;
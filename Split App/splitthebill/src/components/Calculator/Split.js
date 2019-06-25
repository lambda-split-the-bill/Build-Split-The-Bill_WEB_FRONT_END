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
        this.setState({ total: parseFloat(Math.round((this.state.num2 / this.state.num1) * 100) / 100).toFixed(2) })
        
};

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
};

    
    render(){
        console.log('num1 =', this.state.num1, 'num2 = ',this.state.num2)
        console.log(this.state.resturant)
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
                    name='num1'
                    type='number'
                    value={this.state.num1}
                    onChange={this.handleChange} />
                    
                    <h2>How much was the total?</h2>
                    <input
                    name='num2'
                    type='number'
                    value={this.state.num2} 
                    onChange={this.handleChange} />
                    
                    <button type='submit'>Split!</button>
                </form>
                
                <h2>Everyone should pay ${this.state.total}!</h2>

            </div>
        )
    }
}

export default Split;
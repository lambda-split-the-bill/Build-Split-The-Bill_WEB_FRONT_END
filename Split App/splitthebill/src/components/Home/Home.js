import React from 'react';
import { Modal } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Split from '../Calculator/Split';

import '../../App.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
            show: false,
        };
    }
    
    handleClose() {
        this.setState({ show: false });
}

    handleShow() {
        this.setState({ show: true });
}
    
    render() {
        console.log(this.props)
    return (
        <div className='Home'>
            <h1>Welcome {}</h1>

            <button variant="primary" onClick={this.handleShow}>
                Add A Bill!
            </button>
        
        <Modal 
            className='modal'
            show={this.state.show} 
            onHide={this.handleClose}
            size="lg"
            centered>
        <Modal.Header closeButton>
            <Modal.Title>Split The Bill!</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        <Route path='/'
        render={props => <Split {...props} />}
        />
        </Modal.Body>
        
        </Modal>

            <h2>Recent Activity</h2>
            <p>You went out to {this.props.resturant} with Mike, James and Brian and spent {this.props.total}!</p>
        </div>
)}}

export default Home;
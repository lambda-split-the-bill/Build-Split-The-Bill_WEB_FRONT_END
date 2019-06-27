import React from 'react';
import { Modal } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { deleteBill } from '../../actions/bill';
import { connect } from 'react-redux';

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
        console.log(this.props.bill)
    return (
        <div className='Home'>
            <h1>Welcome to Split The Bill!</h1>
            
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
        render={props => <Split {...props} onHide={this.handleClose}  />}
        />
        </Modal.Body>
        
        </Modal>

        

        </div>
)}}

const mapStateToProps = () => {
    return {}
}

export default connect(
    mapStateToProps,
    { deleteBill }
)(Home);
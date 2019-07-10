import React from 'react';
import { Modal } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { deleteBill } from '../../actions/bill';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Logout from '../Login/Logout';
import Bills from '../Calculator/Bills';

import Split from '../Calculator/Split';
import '../../index.css'

const HomeNav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #2c3338;
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 20px 0;
    border-bottom: 1px solid black;
`

const HomeLogo = styled.img`
    height: 120px;
    width: 120px;
    margin: 0 auto;
    left: 0;
    right: 0;
    margin-left: 46%;
`

const AddBillBut = styled.button`
    margin: 0px 25px 0px 0px;
    text-decoration: none;
    color: black;
    text-align: center;
    font-size: 1.2rem;
    background-color: #ffc038;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: 100;
    border: none;
    max-width: 200px;
    cursor: pointer;
`

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    align-items: left;
    position: absolute;
    left: 700px;
`

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
            <HomeNav>
            <HomeLogo src='../../logowhite.png' alt='logo' />
            <Route exact path='/' component={Logout} />
            </HomeNav>

            <HeaderDiv>
            <h1>Welcome to Split The Bill!</h1>
            <AddBillBut variant="primary" onClick={this.handleShow}>
                Add A Bill!
            </AddBillBut>
            <h2>Recent Activity</h2>
            <Bills />
            </HeaderDiv>

            
        
        <Modal
            className='modal'
            show={this.state.show} 
            onHide={this.handleClose}
            size="lg"
            centered>
        <Modal.Header className='close' closeButton>
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
import React from "react";
import { connect } from "react-redux";
import { signUp } from '../../actions/actions';


class Signup extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
    }
};

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
    }
    });
};

    handleSubmit = e => {
        e.preventDefault();
        this.props.signup(this.state.credentials);
};

    render() {
        console.log(this.state);
        return (
        <div className="Signup">
            <form onSubmit={this.handleSubmit}>
            Username:{" "}
            <input
            name="username"
            onChange={this.handleChange}
            value={this.state.credentials.username}
            />
            Password:{" "}
            <input
            name="password"
            onChange={this.handleChange}
            value={this.state.credentials.password}
            />{" "}
        <button>Signup</button>
        </form>
    </div>
    );
}
}

const mapStateToProps = state => {
    console.log(state);
        return {
        creatingUser: state.register.creatingUser
};
};

export default connect(
    mapStateToProps,
    { signUp }
)(Signup);
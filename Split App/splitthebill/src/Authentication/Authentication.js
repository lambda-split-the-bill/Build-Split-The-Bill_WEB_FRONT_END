import React from "react";

const withAuthenticate = App => Login =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                username: "",
                password: "",
                loggedin: false
            };
        }
        componentDidMount() {
            if (!localStorage.getItem("username") && !localStorage.getItem("password")) {
                this.setState({ loggedin: false });
            } else {
                this.setState({ loggedin: true });
            }
        }
        render() {
            if (this.state.loggedin) return <App />;
            return <Login />;
        }
    };

export default withAuthenticate;
import React from "react";
import axios from 'axios';

const withAuthenticate = SplitApp => 
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
            axios
                .get('')
                .then((res) => {
                    if (!axios.get(res.username) && !axios.get(res.password)) {
                        this.setState({ loggedin: false });
                    } else {
                        this.setState({ loggedin: true });
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        render() {
            if (this.state.loggedin) return <SplitApp />;
            return <SplitApp />;
        }
    };

export default withAuthenticate;
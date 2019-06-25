import React from "react";

class Logout extends React.Component {
    
    logout() {
        localStorage.clear();
        window.location.href = '/';
    }
    
    render() {
        return (
            <button
            onClick={this.logout}>
                Log Out
            </button>
        )
    }
}

export default Logout;
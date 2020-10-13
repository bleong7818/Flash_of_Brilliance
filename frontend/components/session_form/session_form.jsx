import React from 'react';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        const errors = this.props.errors

        return (
            <ul>

            </ul>
        )
    }
    
    render() {
        return (
        
            <div className="front-page-container">
                <h1>Please {this.props.formType} or {this.props.NavLink} {this.props.}</h1>
                <form onSubmit={this.handleSubmit} className="login-form-box">

                </form>
            </div>
        )
    }
}
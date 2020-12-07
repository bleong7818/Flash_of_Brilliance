import React from 'react';
import LoginFormContainer from '../session_form/login_form_container'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.nullState = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };
        this.state = this.nullState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
            this.props.history.push("/dashboard");
        }).then(() => this.props.hideModal());
        this.setState(this.nullState);
    }

    handleClose(event) {
        this.props.removeSessionErrors();
        this.props.hideModal();
        this.setState(this.nullState);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
 
        return (
            <ul>
                {(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    
    render() {
        return (
            <div className="modal">
                <form onSubmit={this.handleSubmit} className="sign-up-form-box">
                    <h2 className="login-link">Get Started</h2>
                    <div className="signup-form">
                        <div className="names">
                            <label>
                                <input type="text" onChange={this.update('first_name')} placeholder="First Name" value={this.state.first_name}/>
                            </label>
                            <label>
                                <input type="text" onChange={this.update('last_name')} placeholder="Last Name" value={this.state.last_name}/>
                            </label>
                        </div>
                        <label>
                            <input className="email-and-password" type="email" onChange={this.update('email')} placeholder="Email" value={this.state.email}/>
                        </label>
                        <label>
                            <input className="email-and-password" type="password" onChange={this.update('password')} placeholder="Password" value={this.state.password}/>
                        </label>
                     </div>
                    <div className="sign-up-container">
                        <button className="log-in-button" type="submit">Register</button>
                        <h1 className="form-errors">{this.renderErrors()}</h1>
                     </div>
                <div className="close-button" onClick={this.handleClose}>×</div>
                </form>
            </div>
        )
    }
}

export default SignupForm;
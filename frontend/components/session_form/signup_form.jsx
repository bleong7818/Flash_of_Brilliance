import React from 'react';
import LoginFormContainer from '../session_form/login_form_container'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    // componentDidMount() {
    //     debugger;
    //     this.props.removeSessionErrors();
    // }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
            this.props.history.push("/dashboard")
        }).then(() => this.props.hideModal());
    }

    handleClose(event) {
        this.props.removeSessionErrors();
        this.props.hideModal();
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
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h2 className="login-link">Get Started</h2>
                    <div className="signup-form">
                        <div className="names">
                            <label>
                                <input type="text" onChange={this.update('first_name')} placeholder="First Name"/>
                            </label>
                            <label>
                                <input type="text" onChange={this.update('last_name')} placeholder="Last Name" />
                            </label>
                        </div>
                        <label>
                            <input className="email-and-password" type="text" onChange={this.update('email')} placeholder="Email"/>
                        </label>
                        <label>
                            <input className="email-and-password" type="password" onChange={this.update('password')} placeholder="Password" />
                        </label>
                     </div>
                    <div className="sign-up-container">
                        <button className="log-in-button" type="submit">Register</button>
                        <h1 className="errors">{this.renderErrors()}</h1>
                     </div>
                <div className="close-button" onClick={this.handleClose}>×</div>
                </form>
            </div>
        )
    }
}

export default SignupForm;
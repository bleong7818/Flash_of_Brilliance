import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.nullState = {
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
        this.props.processForm(user).then( () => {
            this.props.history.push("/dashboard");
        }).then(() => this.props.hideModal());
        this.setState(this.nullState);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleClose(event) {
        this.props.removeSessionErrors();
        this.props.hideModal();
        this.setState(this.nullState);
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
                    <h1 className="login-link">Log In</h1>
                    <div className="login-form">
                        <label>
                            <input type="email" onChange={this.update('email')} placeholder="Email" className="login-email" value={this.state.email}/>
                        </label>
                        <label>
                             <input type="password" onChange={this.update('password')} placeholder="Password" className="login-password" value={this.state.password}/>
                        </label>
                    </div>
                        <div className="log-in-container">
                            <button className="log-in-button" type="submit" >Login</button>
                            <h3 className="form-errors">{this.renderErrors()}</h3>
                        </div>
                 <div className="close-button" onClick={this.handleClose}>×</div>
                </form>
            </div>
        )
    }
}

export default LoginForm;
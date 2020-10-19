import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    // componentWillUnmount() {
    //     debugger;
    // }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then( () => {
            this.props.history.push("/dashboard")
        }).then(() => this.props.hideModal());
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleClose(event) {
        this.props.removeSessionErrors();
        this.props.hideModal();
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
        // debugger;
    //    this.props.removeSessionErrors()
        return (
            <div className="modal">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 className="login-link">Log In</h1>
                    <div className="login-form">
                        <label>
                            <input type="text" onChange={this.update('email')} placeholder="Email" className="login-email" />
                        </label>
                        <label>
                             <input type="password" onChange={this.update('password')} placeholder="Password" className="login-password" />
                        </label>
                    </div>
                        <div className="log-in-container">
                            <button className="log-in-button" type="submit" >Login</button>
                            <h3>{this.renderErrors()}</h3>
                        </div>
                 <div className="close-button" onClick={this.handleClose}>×</div>
                </form>

            </div>
        )
    }
}

export default LoginForm;
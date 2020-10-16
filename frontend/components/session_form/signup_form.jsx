import React from 'react';

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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
            this.props.history.push("/dashboard")
        }).then(this.props.hideModal());
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error, i) => (
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
                <button className="close-button" onClick={this.props.hideModal}>×</button>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 className="login-link">Please Sign Up {this.renderErrors()}</h1>
                    <div className="login-form">
                        <div className="names">
                            <label>First Name
                                <input type="text" onChange={this.update('first_name')} value={this.state.first_name}/>
                            </label>
                            <label>Last Name
                                <input type="text" onChange={this.update('last_name')} value={this.state.last_name} />
                            </label>
                        </div>
                        <label>Email:
                            <input type="text" onChange={this.update('email')} value={this.state.email} className="login-email"/>
                        </label>
                        <label>Password:
                             <input type="password" onChange={this.update('password')} value={this.state.password} className="login-password"/>
                        </label>
                        <button type="submit">Sign Up</button>
                     </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;
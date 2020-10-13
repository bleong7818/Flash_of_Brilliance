import React from 'react';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    
    render() {
        return (
        
            <div className="front-page-container">
                <h1 className="login-link">Please {this.props.formType} or {this.props.NavLink} {this.renderErrors()}</h1>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form">
                        <label>Email:
                            <input type="text" onChange={this.update('email')} value={this.state.email} className="login-email"/>
                        </label>
                        <label>Password:
                             <input type="password" onChange={this.update('password')} value={this.state.password} className="login-password"/>
                        </label>
                        <button type="submit" className="" value={this.props.formType}>{this.props.formType}</button>
                     </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;
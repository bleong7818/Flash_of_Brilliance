import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
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
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <h1 className="login-link">Please {this.props.formType} {this.renderErrors()}</h1>
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
                <button className="close-button" onClick={this.props.hideModal}>close</button>
            </div>
        )
    }
}

export default SessionForm;
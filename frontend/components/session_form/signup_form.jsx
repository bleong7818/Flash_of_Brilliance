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
                    <h1 className="login-link">Please Sign Up {this.renderErrors()}</h1>
                    <div className="login-form">
                        <div className="names">
                            <label>First Name
                                <input type="text" onChange={this.update('first_name')} placeholder="First Name"/>
                            </label>
                            <label>Last Name
                                <input type="text" onChange={this.update('last_name')} placeholder="Last Name" />
                            </label>
                        </div>
                        <label>Email:
                            <input type="text" onChange={this.update('email')} placeholder="Email"/>
                        </label>
                        <label>Password:
                             <input type="password" onChange={this.update('password')} placeholder="Password" />
                        </label>
                        <button className="close-button" type="submit">Sign Up</button>
                     </div>
                <div className="close-button" onClick={this.handleClose}>×</div>
                </form>
            </div>
        )
    }
}

export default SignupForm;
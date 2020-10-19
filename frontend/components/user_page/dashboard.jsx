import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.requestUser(this.props.user.id)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.logout().then(() => {
            this.props.history.push("/")})
    }


    render() {
        if (!this.props.user) return null;
        return (
            <nav className="Dashboard-nav">
                <p>Hello, {this.props.user.first_name} {this.props.user.last_name}</p>
                <i class="fas fa-cog">
                </i>
                    <button onClick={this.handleSubmit}>Log out</button>
            </nav>   
        )
    }
}

export default Dashboard;
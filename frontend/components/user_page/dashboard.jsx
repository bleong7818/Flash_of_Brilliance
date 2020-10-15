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
        this.props.processForm().then(() => {
            this.props.history.push("/")})
    }


    render() {
        if (!this.props.user) return null;
        return (
            <div>
                <p>{this.props.user.email}</p>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.props.logout}>Log out</button>
                </form>
            </div>
            
        )
    }
}

export default Dashboard;
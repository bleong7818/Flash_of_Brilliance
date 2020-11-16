import React from "react";

class CreateDeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const deck = Object.assign({}, this.state);
        this.props.CreateDeck(deck).then(() => {
            this.props.history.push("/dashboard");
        });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className="deck-creator">
                <form onSubmit={this.handleSubmit} className="deck-form-box">
                    <h2>Create a Deck</h2>
                    <div className="deck-creation-form">
                        <label>
                            <input type="text" onChange={this.update('title')} placeholder="e.g. Bio 101, HTML terms"/>
                        </label>
                    </div>
                    <div className="deck-form-container">
                        <button className="deck-button" type="submit">Continue</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateDeck;
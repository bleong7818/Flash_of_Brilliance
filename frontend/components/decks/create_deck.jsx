import React from "react";

class CreateDeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            creator_id: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {

    }

    handleSubmit(e) {
        e.preventDefault();
        const deck = Object.assign({}, this.state);
        deck.creator_id = this.props.user.id;
        this.props.createDeck(deck).then(() => {
            this.props.history.push(`/dashboard`);
        });
    }

    handleClose(e) {
        this.props.removeDeckErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return(
            <div>
                {this.props.errors}
            </div>
        )
    }

    render() {
        return (
            <div className="deck-creator">
                <form onSubmit={this.handleSubmit} className="deck-form-box">
                    <h2 className="instructions">Create a Deck</h2>
                    <div className="deck-creation-form">
                        <label>
                            <input type="text" onChange={this.update('title')} placeholder="e.g. Bio 101, HTML terms"/>
                        </label>
                    </div>
                    <div className="deck-form-container">
                        <button className="deck-button" type="submit">Continue</button>
                    </div>
                    <h3 className="deck-errors">{this.renderErrors()}</h3>
                </form>
                <div className="create-close-button" onClick={this.handleClose}>×</div>
            </div>
        )
    }
}

export default CreateDeck;
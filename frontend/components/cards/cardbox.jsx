import React from 'react';

class Cardbox extends React.Component {
    constructor(props) {
        super(props);

        this.deleteRedirect = this.deleteRedirect.bind(this);
    }

    deleteRedirect(e) {
        // e.preventDefault();
        this.props.deleteCard(this.props.card.id);
        this.props.history.push(`/decks/${this.props.deck.id}`);
    }

    render() {
        const deleteButton = this.props.deck.creator_id === this.props.currentUser.id ? (
        <div className="delete-div">
            <button className="edit-card-button">Edit Card</button>
            <button className="delete-card-button" onClick={this.deleteRedirect}>Delete card</button>
        </div>
        ) : null
        return (
            <div className="cardbox">
                {deleteButton}
                <div className="front-side">
                    <h2 className="card-descriptions">Key Term/Question</h2>
                    <div className="card-front_side">{this.props.card.front_side}</div>
                </div>
                <div className="back-side">
                    <h2 className="card-descriptions">Definition/Answer</h2>
                    <div className="card-back_side">{this.props.card.back_side}</div>
                </div>  
            </div>
        )
    }
}

export default Cardbox;
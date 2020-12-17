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
        return (
            <div className="cardbox">
                <div className="delete-div">
                    <button className="delete-card-button" onClick={this.deleteRedirect}>Delete card</button>
                </div>
                <div className="front-side">
                    <h2 className="card-descriptions">Key Term/Question</h2>
                    <div className="card-front_side">{this.props.card.front_side}</div>
                </div>
                <div className="back-side">
                    <h2 className="card-descriptions">Definition/Answer</h2>
                    <div className="card-back_side">{this.props.card.back_side}</div>
                </div>  
                {/* <div className="card-descriptions">
                    <h2 className="front-description">Key Term/Question</h2>
                    <h2 className="back-description">Definition/Answer</h2>
                </div>
                <div className="actual-cards">
                    <div className="delete-div">
                        <button onClick={this.props.deleteRedirect}>Delete card</button>
                    </div>
                    <div className="card-front_side">{this.props.card.front_side}</div>
                    <div className="card-back_side">{this.props.card.back_side}</div>
                </div> */}
            </div>
        )
    }
}

export default Cardbox;
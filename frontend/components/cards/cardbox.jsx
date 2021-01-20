import React from 'react';
import EditCardContainer from './edit_card_container';

class Cardbox extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showEditCard: false
        };

        this.deleteRedirect = this.deleteRedirect.bind(this);
        this.revealEdit = this.revealEdit.bind(this);
    }

    deleteRedirect(e) {
        // e.preventDefault();
        this.props.deleteCard(this.props.card.id);
        this.props.history.push(`/decks/${this.props.deck.id}`);
    }

    revealEdit() {
        this.setState({
            showEditCard: !this.state.showEditCard
        });
    }

    render() {
        const CardActions = this.props.deck.creator_id === this.props.currentUser.id ? (
        <div className="delete-div">
            <button className="edit-card-modal-button" onClick={this.revealEdit}>Edit Card</button>
            <button className="delete-card-button" onClick={this.deleteRedirect}>Delete card</button>
            {this.state.showEditCard ? <EditCardContainer card={this.props.card} close={this.revealEdit}></EditCardContainer> : null}
        </div>
        ) : null
        return (
            <div className="cardbox">
                {CardActions}
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
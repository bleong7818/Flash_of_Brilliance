import React from 'react';

class EditCard extends React.Component {
    constructor(props) {
        super(props);

        this.nullState = {
            front_side: "",
            back_side: ""
        };
        this.state = this.nullState;

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const updatedCard = Object.assign({}, this.state);
        updatedCard.deck_id = this.props.deck.id;
        updatedCard.id = this.props.card.id;

        const frontSides = this.props.cards.map((card) => {
            return card.front_side;
        });
        const backSides = this.props.cards.map((card) => {
            return card.back_side;
        });
        this.props.updateCard(updatedCard);
        if (updatedCard.front_side.length !== 0 && updatedCard.back_side.length !== 0) {
            if (!frontSides.includes(updatedCard.front_side) && !backSides.includes(updatedCard.back_side)) {
                this.props.removeCardErrors();
                this.props.close();
            }
        }
        this.setState(this.nullState);
    }
    
    handleClose() {
        this.props.removeCardErrors();
        this.props.close();
    }

    renderCardErrors() {
        
        return (
            <ul>
                {(this.props.cardErrors).map((error, i) => (
                    <li className="edit-card-error" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="edit-card-modal-bg">
                <div className="edit-card-modal">
                    <div className="edit-deck-container">
                        <form className="edit-card-form" onSubmit={this.handleSubmit}>
                            <h2 className="edit-card-instructions">Edit This Card</h2>
                            <div className="edit-card-fields">
                                <div className="first-edit-field">
                                    <h2 className="edit-front-description">Key Term/Question</h2>
                                    <div className="edit-card-first-input">
                                        <input className="edit-card-front" type="text" onChange={this.update('front_side')}
                                            placeholder={this.props.card.front_side} value={this.state.front_side} />
                                    </div>
                                </div>
                                <div className="second-edit-field">
                                    <h2 className="edit-back-description">Definition/Answer</h2>
                                    <div className="edit-card-second-input">
                                        <input className="edit-card-back" type="text" onChange={this.update('back_side')}
                                            placeholder={this.props.card.back_side} value={this.state.back_side} />
                                    </div>
                                </div>
                                <div className="edit-card-button-container">
                                    <button className="edit-card-button" type="submit">Edit This Card</button>
                                </div>
                                <div className="edit-card-errors">{this.renderCardErrors()}</div>
                            </div>
                        </form>
                        <div className="edit-card-close" onClick={this.handleClose}>×</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditCard;
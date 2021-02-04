import React from 'react';

class DeleteDeck extends React.Component {
    constructor(props) {
        super(props);

        this.deleteRedirect = this.deleteRedirect.bind(this);
    }

    deleteRedirect() {
        this.props.deleteDeck(this.props.deck.id);
        this.props.close();
    }

    render() {
        // debugger;
        return (
           <div className="delete-deck-modal-bg">
                <div className="delete-deck-modal">
                    <h1 className="delete-deck-message">Are you sure you want to delete this deck?</h1>
                    <button className="delete-deck-yes-button" onClick={this.deleteRedirect}
                    >Yes, I want to delete it.</button>
                    <button className="delete-deck-no-button" onClick={this.props.close}>No, I want to keep it.</button>
                    <div className="delete-deck-close" onClick={this.props.close}>×</div>
                </div>
           </div>
        )
    }
}

export default DeleteDeck;
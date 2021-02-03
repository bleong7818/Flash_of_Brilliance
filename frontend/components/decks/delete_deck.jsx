import React from 'react';

class DeleteDeck extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger;
        return (
           <div className="delete-deck-modal-bg">
                <div className="delete-deck-modal">{this.props.deck.title}
                    <div className="delete-deck-close" onClick={this.props.close}>×</div>
                </div>
           </div>
        )
    }
}

export default DeleteDeck;
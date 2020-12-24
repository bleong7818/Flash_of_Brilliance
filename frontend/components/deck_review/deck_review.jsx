import React from 'react';
import { withRouter } from 'react-router-dom';
import DeckReviewContainer from './deck_review_container';

class DeckReview extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestDeck(this.props.deckId);
        this.props.requestCards();
    }

    render() {
        if (!this.props.deck) return null;
        debugger;
        return (
            <div>  
                <div>{this.props.deck.title}</div>
            </div>
        )
    }
}

export default DeckReview;
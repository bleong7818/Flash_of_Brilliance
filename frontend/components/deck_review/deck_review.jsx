import React from 'react';
import { withRouter } from 'react-router-dom';
import DeckReviewContainer from './deck_review_container';

class DeckReview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviewCards: [],
            currentCardIdx: 0,
            markedCards: []
        };
    }

    componentDidMount() {
        this.props.requestDeck(this.props.deckId);
        this.props.requestCards();
    }

    render() {
        if (!this.props.deck) return null;
        if (this.props.deckCards.length === 0) return null;
        debugger;
        return (
            <div>  
                <div>{this.props.deck.title}</div>
                <div>
                    {this.props.deckCards[0].back_side}
                </div>
            </div>
        )
    }
}

export default DeckReview;
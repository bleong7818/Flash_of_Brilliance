import React from 'react';
import { withRouter } from 'react-router-dom';
import DeckReviewContainer from './deck_review_container';

class DeckReview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviewCards: [],
            currentCardIdx: 0,
            markedCards: [],
        };

        this.nextCard = this.nextCard.bind(this);
    }

    componentDidMount() {
        this.props.requestDeck(this.props.deckId);
        this.props.requestCards();
    }

    nextCard() {
        debugger;
        this.setState({currentCardIdx: this.state.currentCardIdx + 1});
    }

    render() {
        if (!this.props.deck) return null;
        if (this.props.deckCards.length === 0) return null;
        // debugger;
        return (
            <div className="deck-review-page">  
                <div className="deck-review-title">{this.props.deck.title}</div>
                <div className ="deck-review-card">
                    <div className="current-card">
                        {this.props.deckCards[this.state.currentCardIdx].back_side}
                    </div>
                </div>
                <div className="card-review-button">
                    <div onClick={this.nextCard} className="next-card">Go Hard</div>
                </div>
                {/* <button className="reveal-button">Reveal Answer</button> */}
            </div>
        )
    }
}

export default DeckReview;
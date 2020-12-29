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
            front: true,
        };

        this.nextCard = this.nextCard.bind(this);
        this.previousCard = this.previousCard.bind(this);
        this.revealAnswer = this.revealAnswer.bind(this);
    }

    componentDidMount() {
        this.props.requestDeck(this.props.deckId);
        this.props.requestCards();
    }

    revealAnswer() {
        this.setState({front: false});
    }

    nextCard() {
        // debugger;
        this.setState({
            currentCardIdx: this.state.currentCardIdx + 1,
            front: true
        });
    }

    previousCard() {
        this.setState({ currentCardIdx: this.state.currentCardIdx - 1});
    }

    render() {
        if (!this.props.deck) return null;
        if (this.props.deckCards.length === 0) return null;
        // debugger;
        // debugger;

        const frontSide = this.props.deckCards[this.state.currentCardIdx] ? (
            this.props.deckCards[this.state.currentCardIdx].front_side
        ) : null

        const backSide = this.props.deckCards[this.state.currentCardIdx] ? (
            this.props.deckCards[this.state.currentCardIdx].back_side
        ) : null

        const prevCard = this.state.currentCardIdx !== 0 ? (
            <div className="prev-card-button" onClick={this.previousCard}>Go Back To the Previous Card</div>
        ) : null

        const frontOrBack = this.state.front === true ? (
            <div className="card-review-front">
                <div className="deck-review-card">
                    <div className="current-card">
                        {frontSide}
                    </div>
                </div>
                <div className="card-review-button">
                    {prevCard}
                    <div onClick={this.revealAnswer} className="next-card-button">Reveal Answer</div>
                </div>
            </div>
        ) : (
            <div className="card-review-back">
                <div className="deck-review-card">
                    <div className="current-card">
                        {backSide}
                    </div>
                </div>
                <div className="card-review-button">
                    {/* {prevCard} */}
                    <div onClick={this.nextCard} className="next-card">Next Card</div>
                </div>
            </div>
        ) 
        debugger;
        const noCard = this.props.deckCards[this.state.currentCardIdx] === undefined ? (
            <div>
                The End
            </div>
        ) : frontOrBack 
        // debugger;
        return (
            <div className="deck-review-page">  
                <div className="deck-review-title">{this.props.deck.title}</div>
                {noCard}
            </div>
        )
    }
}

export default DeckReview;
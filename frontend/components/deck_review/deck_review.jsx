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
        this.reset = this.reset.bind(this);
        this.cardsRedirect = this.cardsRedirect.bind(this);
        this.deckRedirect = this.deckRedirect.bind(this);
    }

    componentDidMount() {
        this.props.requestDeck(this.props.deckId);
        this.props.requestCards();
    }

    revealAnswer() {
        this.setState({front: false});
    }

    nextCard() {
        this.setState({
            currentCardIdx: this.state.currentCardIdx + 1,
            front: true
        });
    }

    previousCard() {
        this.setState({ currentCardIdx: this.state.currentCardIdx - 1});
    }

    reset() {
        this.setState({ currentCardIdx: 0});
    }

    cardsRedirect(e) {
        e.preventDefault();
        this.props.history.push(`/decks/${this.props.deck.id}`);
    }

    deckRedirect(e) {
        e.preventDefault();
        this.props.history.push(`/decks`);
    }

    render() {
        if (!this.props.deck) return null;
        if (this.props.deckCards.length === 0) return null;

        const frontSide = this.props.deckCards[this.state.currentCardIdx] ? (
            this.props.deckCards[this.state.currentCardIdx].front_side
        ) : null;

        const backSide = this.props.deckCards[this.state.currentCardIdx] ? (
            this.props.deckCards[this.state.currentCardIdx].back_side
        ) : null;

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
                    <div onClick={this.nextCard} className="next-card">Next Card</div>
                </div>
            </div>
        ) 
        ;
        const CardOrNoCard = this.props.deckCards[this.state.currentCardIdx] === undefined ? (
            <div>
                <div className="deck-review-card">
                    <div className="current-card">
                        You have reached the end of the cards for this deck. Would you like to study this deck again?
                    </div>
                </div>
                <div className="card-review-button">
                    <div onClick={this.reset} className="review-reset">Study Again</div>
                    <div onClick={this.deckRedirect} className="review-reset">Go Back to All Decks</div>
                </div>
            </div>
        ) : frontOrBack 
        
        return (
            <div className="deck-review-page">  
                <div className="deck-review-title">{this.props.deck.title}</div>
                <div className="deck-review-redirect">
                    <button className="deck-review-all-cards" onClick={this.cardsRedirect}>See All Cards</button>
                </div>
                {CardOrNoCard}
            </div>
        )
    }
}

export default DeckReview;
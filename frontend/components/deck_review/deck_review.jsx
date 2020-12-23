import React from 'react';
import { withRouter } from 'react-router-dom';
import DeckReviewContainer from './deck_review_container';

class DeckReview extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDeck();
        this.props.fetchCards();
    }

    render() {
        debugger;
        return (
            <div>  
                <div>{this.props.deck.title}</div>
            </div>
        )
    }
}

export default DeckReview;
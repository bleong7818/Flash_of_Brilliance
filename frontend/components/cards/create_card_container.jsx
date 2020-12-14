import { connect } from 'react-redux';
import { createCard, removeCardErrors } from '../../actions/card_actions';
import CreateCard from './create_card';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    return {
        cards: state.entities.cards,
        deck: state.entities.decks[ownProps.match.params.deckId],
        cardErrors: state.errors.cards
    };
};

const MDTP = dispatch => {
    return {
        createCard: (card) => dispatch(createCard(card)),
        removeCardErrors: () => dispatch(removeCardErrors())
    };
};

export default withRouter(connect(MSTP, MDTP)(CreateCard));
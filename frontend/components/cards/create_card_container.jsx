import { connect } from 'react-redux';
import { createCard, removeCardErrors } from '../../actions/card_actions';
import CreateCard from './create_card';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    return {
        cards: Object.values(state.entities.cards),
        deck: state.entities.decks.current,
        cardErrors: Object.values(state.errors.cards),
        user: state.entities.users[state.session.id]
    };
};

const MDTP = dispatch => {
    return {
        createCard: (card) => dispatch(createCard(card)),
        removeCardErrors: () => dispatch(removeCardErrors())
    };
};

export default withRouter(connect(MSTP, MDTP)(CreateCard));
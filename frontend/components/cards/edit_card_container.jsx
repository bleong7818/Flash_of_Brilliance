import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateCard, requestCards, requestCard } from '../../actions/card_actions';
import EditCard from './edit_card';

const MSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.session,
        deck: state.entities.decks.current
    };
};

const MDTP = dispatch => {
    // debugger;
    return {
        updateCard: (updatedCard) => dispatch(updateCard(updatedCard)),
        requestCards: () => dispatch(requestCards())
    };
};

export default withRouter(connect(MSTP, MDTP)(EditCard));
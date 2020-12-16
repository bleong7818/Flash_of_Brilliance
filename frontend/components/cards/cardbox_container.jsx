import { connect } from 'react-redux';
import Cardbox from './cardbox';
import { requestCard, deleteCard } from '../../actions/card_actions';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    return {
        currentUser: state.session
    };
};

const MDTP = dispatch => {
    
    return {
        requestCard: (cardId) => dispatch(requestCard(cardId)),
        deleteCard: (cardId) => dispatch(deleteCard(cardId))
    };
};

export default withRouter(connect(MSTP, MDTP)(Cardbox));
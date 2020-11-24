import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { requestDecks } from '../../actions/deck_actions';
import { requestUser, logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    // debugger;
    return {
        user: state.entities.users[state.session.id],
        decks: Object.values(state.entities.decks)
    };
};

const MDTP = dispatch => {
    return {
        requestDecks: () => dispatch(requestDecks()),
        requestUser: userId => dispatch(requestUser(userId)),
        logout: () => dispatch(logout())
    };
};

export default withRouter(connect(MSTP, MDTP)(Dashboard));
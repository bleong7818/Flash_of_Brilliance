import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { requestDecks } from '../../actions/deck_actions';
import { requestUser, logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    return {
        session_id: state.session.id,
        user: state.entities.users[state.session.id],
        // user: Object.values(state.entities.users).length === 1 ? state.entities.users[state.session.id] : 
        // state.entities.users.filter(user => user.id === state.session.id)[0],
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
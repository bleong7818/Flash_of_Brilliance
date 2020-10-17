import { connect } from 'react-redux';
import MainPage from './main_page';
import {removeSessionErrors} from '../../actions/session_actions';

const MSTP = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id]
    };
};

const MDTP = dispatch => {
    return {
        removeSessionErrors: () => dispatch(removeSessionErrors())
    };
};

export default connect(MSTP, MDTP)(MainPage);
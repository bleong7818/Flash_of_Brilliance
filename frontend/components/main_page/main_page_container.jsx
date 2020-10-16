import { connect } from 'react-redux';
import MainPage from './main_page';

const MSTP = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id]
    };
};

const MDTP = dispatch => {
    return {
        requestUser: userId => dispatch(requestUser(userId))
    };
};

export default connect(MSTP, MDTP)(MainPage);
import { connect } from 'react-redux';
import { receiveDecks, removeDeck } from '../../actions/deck_actions';
import EventIndex from './event_index'

const MSTP = (state, ownProps) => {
    return {
        decks: Object.values(state.entities.decks
    };
};

const MDTP = 
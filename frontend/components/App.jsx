import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
// import NavBar from './Nav_bar/Nav_Bar';
import NavBarContainer from './Nav_bar/nav_bar_container';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';
import DashboardContainer from './user_page/dashboard_container';
import MainPageContainer from './main_page/main_page_container';
import DeckShowContainer from './decks/deck_show_container';
// import CreateDeckContainer from './decks/create_deck_container';
import DeckIndexContainer from './decks/deck_index_container';
import DeckReviewContainer from './deck_review/deck_review_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPage from './main_page/main_page';

const App = () => (
    <div className="front-page">
        <div>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Permanent+Marker&display=swap" rel="stylesheet"/>
        </div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/dashboard" component={DashboardContainer}/>
            <ProtectedRoute exact path="/decks/:deckId" component={DeckShowContainer} />
            <ProtectedRoute exact path = "/decks/:deckId/study" component={DeckReviewContainer}/>
            {/* <ProtectedRoute exact path="/dashboard/newDeck" component={CreateDeckContainer}/> */}
            <ProtectedRoute exact path ="/decks" component={DeckIndexContainer}/>
            <Route path="/" component={MainPageContainer} />
        </Switch>
    </div>
);

export default App;
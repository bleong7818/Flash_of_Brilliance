import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBarContainer from './Nav_bar/nav_bar_container';
import DashboardContainer from './user_page/dashboard_container';
import MainPageContainer from './main_page/main_page_container';
import DeckShowContainer from './decks/deck_show_container';
import DeckIndexContainer from './decks/deck_index_container';
import DeckReviewContainer from './deck_review/deck_review_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="front-page">
        <script>
            (function(apiKey){
                (function (p, e, n, d, o) {
                    var v, w, x, y, z; o = p[d] = p[d] || {}; o._q = o._q || [];
                    v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track']; for (w = 0, x = v.length; w < x; ++w)(function (m) {
                        o[m] = o[m] || function () { o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0))); };
                    })(v[w]);
                    y = e.createElement(n); y.async = !0; y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
                    z = e.getElementsByTagName(n)[0]; z.parentNode.insertBefore(y, z);
                })(window, document, 'script', 'pendo');

            // Call this whenever information about your visitors becomes available
            // Please use Strings, Numbers, or Bools for value types.
            pendo.initialize({
                visitor: {
                id:              'VISITOR-UNIQUE-ID'   // Required if user is logged in
                // email:        // Recommended if using Pendo Feedback, or NPS Email
                // full_name:    // Recommended if using Pendo Feedback
                // role:         // Optional

                // You can add any additional visitor level key-values here,
                // as long as it's not one of the above reserved names.
            },

            account: {
                id:           'ACCOUNT-UNIQUE-ID' // Required if using Pendo Feedback
                // name:         // Optional
                // is_paying:    // Recommended if using Pendo Feedback
                // monthly_value:// Recommended if using Pendo Feedback
                // planLevel:    // Optional
                // planPrice:    // Optional
                // creationDate: // Optional

                // You can add any additional account level key-values here,
                // as long as it's not one of the above reserved names.
            }
        });
            })('3f1fc066-3ec9-460d-6a7b-c238a1fb5bf6');
        </script>
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
            <ProtectedRoute exact path ="/decks" component={DeckIndexContainer}/>
            <Route path="/" component={MainPageContainer} />
        </Switch>
    </div>
);

{/* <script>
    (function (apiKey) {
        (function (p, e, n, d, o) {
            var v, w, x, y, z; o = p[d] = p[d] || {}; o._q = o._q || [];
            v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track']; for (w = 0, x = v.length; w < x; ++w)(function (m) {
                o[m] = o[m] || function () { o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0))); };
            })(v[w]);
            y = e.createElement(n); y.async = !0; y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
            z = e.getElementsByTagName(n)[0]; z.parentNode.insertBefore(y, z);
        })(window, document, 'script', 'pendo');
            })('3f1fc066-3ec9-460d-6a7b-c238a1fb5bf6');
    // in your authentication promise handler or callback
    pendo.initialize({
        visitor: {
        id: 'VISITOR-UNIQUE-ID'   // Required if user is logged in
                        // email:        // Recommended if using Pendo Feedback, or NPS Email
                        // full_name:    // Recommended if using Pendo Feedback
                        // role:         // Optional

                        // You can add any additional visitor level key-values here,
                        // as long as it's not one of the above reserved names.
                    },

    account: {
        id: 'ACCOUNT-UNIQUE-ID' // Required if using Pendo Feedback
                        // name:         // Optional
                        // is_paying:    // Recommended if using Pendo Feedback
                        // monthly_value:// Recommended if using Pendo Feedback
                        // planLevel:    // Optional
                        // planPrice:    // Optional
                        // creationDate: // Optional

                        // You can add any additional account level key-values here,
                        // as long as it's not one of the above reserved names.
                    }
                });
</script> */}

export default App;
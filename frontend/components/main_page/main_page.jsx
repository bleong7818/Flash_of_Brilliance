import React from 'react'
import NavBarContainer from '../Nav_bar/nav_bar_container';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main">
                <img className="flashcard-image" src="https://www.brainscape.com/blog/wp-content/uploads/2011/08/tumblr_njevg7orp01u8ccjmo1_1280.jpg" alt="flashcard-image"/>
            </main>
        )
    }
}

export default MainPage;
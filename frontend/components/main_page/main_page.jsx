import React from 'react'
import NavBarContainer from '../Nav_bar/nav_bar_container';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <nav>
                    <NavBarContainer />
                </nav>
            </main>
        )
    }
}

export default MainPage;
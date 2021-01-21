import React from 'react'
import NavBarContainer from '../Nav_bar/nav_bar_container';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <div className="intro-message">
                    <h1 className="welcome-message">Welcome to Flash of Brilliance!</h1>
                    <h2 className="secondary-message">Create, save, and study flashcards to enhance your learning</h2>
                </div>
                <img className="flashcard-image" src="https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vbWVkaWEucmJsLm1zL2ltYWdlP3U9JTJGZmlsZXMlMkYyMDE3JTJGMDIlMkYxMSUyRjYzNjIyNDUxMzE5NTI0OTYyNzE3ODgwNjA1ODNfMS5wbmcmaG89aHR0cHMlM0ElMkYlMkZhejYxNjU3OC52by5tc2VjbmQubmV0JnM9MTAxOSZoPTRjM2ZhZDBmM2UxMjE0ODA2ODkzNTk3OGVkZWY1NWZlMzhjMTQ0Y2JkYTc0NzI5ZTgxNDMyZjA0YTA2YmU1NDImc2l6ZT05ODB4JmM9MTQzNjc4OTc0MyIsImV4cGlyZXNfYXQiOjE2NjkyOTU2ODR9.sz_e8Gn3QSFgSMNB5Xz4ty0YX9OrWi8ucDd9b_T1D3E/img.jpg?width=1200&height=628" alt="flashcard-image"/>
            </div>
        )
    }
}

export default MainPage;
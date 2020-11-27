import React from "react";

class Deckbox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.deck.title}</div>
        )
    }

}

export default Deckbox;
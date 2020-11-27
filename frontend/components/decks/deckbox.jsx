import React from "react";

class Deckbox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger;
        return (
            <li>{this.props.deck.title}</li>
        )
    }

}

export default Deckbox;
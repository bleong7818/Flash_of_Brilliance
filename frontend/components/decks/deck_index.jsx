import React from "react";
import { Link } from 'react-router-dom';

class DeckIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestDecks();
    }

    render() {
        return (
            <div>testing</div>
        );
    }

}

export default DeckIndex;
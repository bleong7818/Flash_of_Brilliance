import React from 'react';

class EditCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.card.front_side}</div>
        )
    }
}

export default EditCard;
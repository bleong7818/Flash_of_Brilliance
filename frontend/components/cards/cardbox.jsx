import React from 'react';

class Cardbox extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="cardbox">
                <div className="card-front_side">{this.props.card.front_side}</div>
                <div className="card-back_side">{this.props.card.back_side}</div>
            </div>
        )
    }
}

export default Cardbox;
import React from 'react';

class Cardbox extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="cardbox">
                <div className="card-descriptions">
                    <h2 className="front-description">Key Term/Question</h2>
                    <h2 className="back-description">Definition/Answer</h2>
                </div>
                <div className="actual-cards">
                    <div className="card-front_side">{this.props.card.front_side}</div>
                    <div className="card-back_side">{this.props.card.back_side}</div>
                </div>
            </div>
        )
    }
}

export default Cardbox;
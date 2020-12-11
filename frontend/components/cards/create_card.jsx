import React from 'react';
import { Link } from 'react-router-dom';

class CreateCard extends React.Component {
    constructor(props) {
        super(props);
        this.nullState = {
            front_side: "",
            back_side: ""
        };
        this.state = this.nullState;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderCardErrors() {
        return (
            <div>
                {this.props.cardErrors}
            </div>
        )
    }

    render() {
        return (
        <div className="card-modal-bg">
            <div className="create-card-modal">
                <div className="card-creator">
                    <form onSubmit={this.handleSubmit} className="create-card-form">
                        <h2>Create a Card</h2>
                        <div className="create-card-fields">
                            <label>Key Term/Question
                                <input className="create-card-front" onChange={this.update('front_side')} 
                                placeholder="Who performed the hit song 'I Want it that Way?'" value={this.state.front_side}/>
                            </label>
                            <label>Definition/Answer
                                <input className="create-card-back" type="text" onChange={this.update('back_side')}
                                placeholder="The Backstreet Boys" value={this.state.back_side}/>
                            </label>
                            <button className="create-card-button" type="submit">Create</button>
                            <h3 className="card-errors">{this.renderCardErrors()}</h3>
                        </div>
                    </form>
                </div>  
            </div>
        </div>
        )
    }
}

export default CreateCard;
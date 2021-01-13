import React from 'react';

class EditDeck extends React.Component {
    constructor(props) {
        super(props);

        this.nullState = {
            title: ""
        };

    }

    componentDidMount() {
        this.requestDecks();
        // this.requestDeck();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderEditErrors() {
        return (
            <div>
                {this.props.errors}
            </div>
        )
    }

    render() {
        return (
            <div className="edit-deck-bg">
                <div className="edit-deck-modal">
                    <div className="edit-deck-container">
                        <form className="edit-deck-form" onSubmit={this.handleSubmit}>
                            <h2>Edit Deck Title</h2>
                            <div className="edit-deck-input-box">
                                <input className="edit-deck-input" type="text" onChange={this.update('title')}
                                 placeholder={this.props.deck.title} value={this.state.title}/>
                            </div>
                            <div className="edit-deck-button-container">
                                <button className="edit-deck-button" type="submit">Submit</button>
                            </div>
                            <h3 className="edit-deck-errors">{this.renderEditErrors()}</h3>
                        </form>
                        {/* <div className="edit-deck-close" onClick={this.handleClose}>×</div> */}
                    </div>
                </div>
            </div>
        )
    }

}
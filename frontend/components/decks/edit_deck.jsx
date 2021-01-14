import React from 'react';

class EditDeck extends React.Component {
    constructor(props) {
        super(props);

        this.nullState = {
            title: "",
            // showEditDeck: false
        };
        this.state = this.nullState;
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        // this.requestDecks();
        // this.requestDeck();
    }

    handleSubmit(e) {
        e.preventDefault();
        let newDeck = Object.assign({}, this.state);
        newDeck.creator_id = this.props.currentUser.id;
        newDeck.id = this.props.deck.id;
        // debugger;
        // if (this.state.title.length !== 0) {
        //     this.props.updateDeck(newDeck).then(
        //         this.props.close()
        //     );
        // }
        this.props.updateDeck(newDeck).then(res => {
            console.log(res);
            debugger
        });
        
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleClose() {
        this.props.close();
    }

    renderEditErrors() {
        return (
            <div>
                {this.props.errors}
            </div>
        )
    }

    render() {
        // debugger;
        return (
            <div className="edit-deck-modal-bg">
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
                        <div className="edit-deck-close" onClick={this.handleClose}>×</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditDeck;
import React from "react";

class CreateDeck extends React.Component {
    constructor(props) {
        super(props);
        this.nullState = {
            title: "",
            creator_id: ""
        };
        this.state = this.nullState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const deck = Object.assign({}, this.state);

        // let deckSubmit = document.querySelector('.deck-button');
        let modalBg = document.querySelector('.modal-bg');
        if (deck.title.length !== 0) {
            modalBg.classList.remove('bg-active');
        }
        deck.creator_id = this.props.user.id;
        this.props.createDeck(deck).then(() => {
            this.props.history.push(`/dashboard`);
        });
        this.setState(this.nullState);
    }

    handleClose(e) {
        this.props.removeDeckErrors();
        this.setState(this.nullState);
        let modalBg = document.querySelector('.modal-bg');
        modalBg.classList.remove('bg-active');
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return(
            <div>
                {this.props.errors}
            </div>
        )
    }

    // <div className="modal-bg">
    //     <div className="create-deck-modal">
    //         <CreateDeckContainer />
    //         {/* <div className="create-close-button">×</div> */}
    //     </div>
    // </div>

    render() {
        return (
            <div className="modal-bg">
                <div className="create-deck-modal">
                    <div className="deck-creator">
                        <form onSubmit={this.handleSubmit} className="deck-form-box">
                            <h2 className="instructions">Create a Deck</h2>
                            <div className="deck-creation-form">
                                <input className="create-deck-title" type="text" onChange={this.update('title')} 
                                placeholder="e.g. Bio 101, HTML terms" value={this.state.title}/>
                            </div>
                            <div className="deck-form-container">
                                <button className="deck-button" type="submit">Create Deck</button>
                            </div>
                            <h3 className="deck-errors">{this.renderErrors()}</h3>
                        </form>
                        <div className="create-close-button" onClick={this.handleClose}>×</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateDeck;
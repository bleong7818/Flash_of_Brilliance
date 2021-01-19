import React from 'react';

class EditCard extends React.Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.close();
    }

    render() {
        return (
            <div className="edit-card-modal-bg">
                <div className="edit-card-modal">
                    <div className="edit-deck-container">{this.props.card.front_side}
                        <div className="edit-card-close" onClick={this.handleClose}>×</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditCard;
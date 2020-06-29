import React, { Component } from 'react';

class Card extends Component {
    render() {

        const { className, children, cardheader, headerbackground } = this.props;

        return (
            <div className={"card " + className}>
                <div className="card-body">
                    {children}
                </div>
            </div>
        )
    }
}

export default Card;
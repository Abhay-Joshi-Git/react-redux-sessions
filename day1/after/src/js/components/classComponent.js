import React from 'react';

export default class Class extends React.Component {
    render() {
        return (
            <div
                className="well well-sm"
                onClick={this.onItemClick}
            >
                <h4>id : {this.props.item.id}</h4>
                <h4>Name : {this.props.item.teacher}</h4>
            </div>
        )
    }

    onItemClick = () => {
        this.props.handleItemClick(this.props.item.id);
    }

}

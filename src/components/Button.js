import React, {Component} from "react";

class Button extends Component {
    render() {
        let classes = ['calc-button', `${this.props.className}`].join(' ');

        return (
            <div className={`column-${this.props.cols}`}>
                    <button className={classes} onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </div>
        )
    }
}

export default Button;
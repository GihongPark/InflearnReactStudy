import React, { Component, PropTypes } from 'react';

const propTypes = {
    
};

const defaultProps = {
    number: -1
};

class Value extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;
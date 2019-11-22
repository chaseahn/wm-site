import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { whileStatement } from '@babel/types';


class OutlineButton extends Component {

    render() {
        return (
            <div className="button-padding">
                <Button variant="outlined" style={buttonStyle}>
                    {this.props.text}
                </Button>
            </div>
        )
    }
}

var buttonStyle = {
    // backgroundColor: "black",
    color: "white",
    borderRadius: "100px",
    borderColor: "white",
    paddingLeft: "32px",
    paddingRight: "32px",
    paddingTop: "8px",
    paddingBottom: "8px",
    minWidth: "200px",
}

export default OutlineButton; 
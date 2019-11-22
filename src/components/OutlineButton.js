import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class OutlineButton extends Component {

    render() {
        return (
            <div>
                <Button variant="outlined" style={buttonStyle}>
                    About us
                </Button>
            </div>
        )
    }
}

var buttonStyle = {
    backgroundColor: "black",
    color: "white",
    size: "large",
    borderRadius: "100px"
}

export default OutlineButton; 
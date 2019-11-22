import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


class OutlineButton extends Component {

    render() {

        return (
            <div className="navtop">
                <AppBar position="fixed">
                    <Toolbar>
                    <IconButton edge="start" className="navtop-icon-button"color="blue" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className="navtop-title">
                        Winik Media
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


export default OutlineButton; 
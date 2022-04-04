import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar} from "@material-ui/core";

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar
                position={"fixed"}
                style={{
                    backgroundColor:"#2f2f2f",
                    padding:'10px 0px',
                    boxShadow:'none'
                }}
                >
                    <Toolbar>
<div className={"header_logo"}>
    <div className={"font_righteous header_logo_venue"}>
The Venue
    </div>
    <div className={"header_logo_title"}>
        Musical Events
    </div>
</div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;
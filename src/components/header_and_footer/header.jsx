import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
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
<div className={"header_logo"}>
    <div className={"font_righteous header_logo_venue"}>
The Venue
    </div>
    <div className={"header_logo_title"}>
Musical Events
    </div>
</div>
                </AppBar>
            </div>
        );
    }
}

export default Header;
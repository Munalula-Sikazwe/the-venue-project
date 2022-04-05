import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = ({open,onClose}) => {

    return (
        <div>
<Drawer
    anchor={"right"}
    open={open}
    onClose={()=> onClose(false)}
>
<List component={"nav"}>
    <ListItem button>
Event starts in
    </ListItem>
    <ListItem button>
        Venue Info
    </ListItem>
    <ListItem button>
        Highlights
    </ListItem>
    <ListItem button>
        Price
    </ListItem>
    <ListItem button>
        Location
    </ListItem>
</List>
</Drawer>
        </div>
    );
};

export default SideDrawer;
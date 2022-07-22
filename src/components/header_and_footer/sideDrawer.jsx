import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';
const SideDrawer = ({open,onClose}) => {
const scrollToSection = (element) => {
    scroller.scrollTo(element,{
        duration:1500,
        delay:100,
        smooth:true,
        offset:-70
    });
    onClose(false);
}
    return (
        <div>
<Drawer
    anchor={"right"}
    open={open}
    onClose={()=> onClose(false)}
>
<List component={"nav"}>
    <ListItem button onClick={()=>scrollToSection('countdown')}>
Event starts in
    </ListItem>
    <ListItem button onClick={()=>scrollToSection('info')}>
        Venue Info
    </ListItem>
    <ListItem button  onClick={()=>scrollToSection('highlights')}>
        Highlights
    </ListItem>
    <ListItem button onClick={()=>scrollToSection('pricing')}>
        Price
    </ListItem>
    <ListItem button onClick={()=>scrollToSection('location')}>
        Location
    </ListItem>
    <ListItem button onClick={()=>scrollToSection('footer')}>
        Footer
    </ListItem>
</List>
</Drawer>
        </div>
    );
};

export default SideDrawer;
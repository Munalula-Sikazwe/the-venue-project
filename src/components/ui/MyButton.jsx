import React from 'react'
import { Button } from '@material-ui/core';
import Ticket_Icon from '../../resources/images/icons/ticket.png';
export default function MyButton({link, text, bck, color}) {
  return (
    <Button 
    href={link}
    size={"small"}
    style={{
        backgroundColor: bck,
        color,
    }}
    variant="contained" 
    color="primary"
    >
        <img
        src={Ticket_Icon}
        alt={"icon_image"}
        className={"iconImage"}
        />

{text}
    </Button>
  )
}

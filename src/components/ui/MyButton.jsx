import React from 'react'
import { Button } from '@material-ui/core';
import Ticket_Icon from '../../resources/images/icons/ticket.png';
export default function MyButton() {
  return (
    <Button 
    href={'https://www.google.com'}
    size={"small"}
    style={{
        backgroundColor: 'red',
        color: 'white',
    }}
    variant="contained" 
    color="primary"
    >
        <img
        src={Ticket_Icon}
        alt={"icon_image"}
        className={"iconImage"}
        />

Purchase Tickets
    </Button>
  )
}

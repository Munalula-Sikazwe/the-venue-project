import React from 'react'
import { Fade } from 'react-reveal'

export default function FooterComponent() {
  return (
    <footer
    className={"bck_red"}
    >
<Fade>
    <div className={"font_righteous footer_logo_venue"}>
The Venue
    </div>
    <div className={"footer_copyright"}>
    &copy; 2020 by The Venue. All rights reserved.
    </div>
</Fade>
    </footer>
  )
}

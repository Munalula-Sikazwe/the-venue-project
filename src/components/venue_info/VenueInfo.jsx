import React from "react";
import { Zoom } from "react-reveal";
import CalenderIcon from "../../resources/images/icons/calendar.png";
import LocationIcon from "../../resources/images/icons/location.png";
export default function VenueInfo() {
  return (
    <div className={"bck_black"}>
      <div className={"center_wrapper"}>
        <div className={"vn_wrapper"}>
          <Zoom
          duration={500}
        
          >
          <div className={"vn_item"}>
            <div className={"vn_outer"}>
              <div className={"vn_inner"}>
                <div className={"vn_icon_square bck_red"}></div>
                <div className={"vn_icon"}
                style={{
                  background: `url(${CalenderIcon})`,
                }}
                >
                </div>
                <div className={"vn_title"}>Event Date & Time</div>
                <div className={"vn_desc"}> 12 August 2022</div>
              </div>
            </div>
            
          </div>
          </Zoom>
          <Zoom
          duration={500}
          delay={500}
          >
          <div className={"vn_item"}>
            <div className={"vn_outer"}>
              <div className={"vn_inner"}>
                <div className={"vn_icon_square bck_yellow"}></div>
                <div className={"vn_icon"}
                style={{
                  background: `url(${LocationIcon})`,
                }}
                >
                </div>
                <div className={"vn_title"}>Event Date & Time</div>
                <div className={"vn_desc"}> 12 August 2022</div>
              </div>
            </div>
            
          </div>
          </Zoom>
          
        </div>
      </div>
    </div>
  );
}

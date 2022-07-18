import React from "react";

export default function TimeUntil() {
  return (
    <div className={"countdown_wrapper"}>
      <div className={"countdown_top"}>Event Starts In</div>
      <div className={"countdown_bottom"}>
        <div className={"countdown_item"}>
          <div className={"countdown_time"}>1</div>
          <div className={"countdown_tag"}>Days</div>
        </div>
        <div className={"countdown_item"}>
          <div className={"countdown_time"}>2</div>
          <div className={"countdown_tag"}>HS</div>
        </div>
        <div className={"countdown_item"}>
          <div className={"countdown_time"}>3</div>
          <div className={"countdown_tag"}>Min</div>
        </div>
        <div className={"countdown_item"}>
          <div className={"countdown_time"}>56</div>
          <div className={"countdown_tag"}>Sec</div>
        </div>
      </div>
    </div>
  );
}

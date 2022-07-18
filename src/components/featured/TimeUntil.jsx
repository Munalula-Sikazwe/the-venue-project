import React from "react";
import { useCallback } from "react";
import { useState ,useEffect} from "react";
import Slide from "react-reveal";
export default function TimeUntil() {
    const [deadline, setDeadLine] = useState("Aug,12,2022");
    const [day , setDay] = useState(0);
    const [hour,setHour] = useState(0);
    const [min,setMin] = useState(0);
    const [sec, setSec] = useState(0);

    const getTimeUntilDeadLine = useCallback(()=>{
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0){
            console.log("time passed")
        }
        else {
            setSec(Math.floor((time/1000)%60));
            setMin(Math.floor((time/1000/60)%60));
            setHour(Math.floor((time/(1000*60*60))%24))
            setDay(Math.floor((time/(1000*60*60*24))))
        }
    },[deadline])
    useEffect(() => {
      setInterval(getTimeUntilDeadLine,1000)
     
    }, [getTimeUntilDeadLine])
    
  return (
    <Slide left delay={1000}>
      <div className={"countdown_wrapper"}>
        <div className={"countdown_top"}>Event Starts In</div>
        <div className={"countdown_bottom"}>
          <div className={"countdown_item"}>
            <div className={"countdown_time"}>{day}</div>
            <div className={"countdown_tag"}>Days</div>
          </div>
          <div className={"countdown_item"}>
            <div className={"countdown_time"}>{hour}</div>
            <div className={"countdown_tag"}>HS</div>
          </div>
          <div className={"countdown_item"}>
            <div className={"countdown_time"}>{min}</div>
            <div className={"countdown_tag"}>Min</div>
          </div>
          <div className={"countdown_item"}>
            <div className={"countdown_time"}>{sec}</div>
            <div className={"countdown_tag"}>Sec</div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

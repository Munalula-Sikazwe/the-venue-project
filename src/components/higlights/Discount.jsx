import React from "react";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import { Fade, Slide } from "react-reveal";
import MyButton from "../ui/MyButton";
export default function Discount() {
  const [discountStart, setDiscountStart] = useState(0);
  const [discountEnd] = useState(30);
  const discountPercent = useCallback(() => {
    if (discountStart < discountEnd) {
      setDiscountStart(discountStart + 1);
    }
  }, [discountStart, discountEnd]);
  useEffect(() => {
    setTimeout(discountPercent, 30);

    
  }, [discountStart,discountPercent]);

  
  
console.log(discountStart)
  return (
    <div className={"center_wrapper"}>
      <div className={"discount_wrapper"}>
        <Fade onReveal={discountPercent}>
          <div className={"discount_porcentage"}>
            <span>{discountStart}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide>
          <div className={"discount_description"}>
            <h3>Purchase tickets before 20th June</h3>
            <p>Order now while stocks last</p>
            
            <MyButton
            text={"Purchase Tickets"}
            bck={"#ff0000"}
            color={"#fff"}
            link={"https://www.google.com"}
            />
          
          </div>
         
        </Slide>
      </div>
    </div>
  );
}

import React from "react";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import { Fade, Slide } from "react-reveal";
import MyButton from "../ui/MyButton";
export default function Discount() {
  const [discountStart, setDiscountStart] = useState(0);
  const [discountEnd, setDiscountEnd] = useState(30);
  useEffect(() => {
    setTimeout(discountPercent, 30);

    
  }, [discountStart]);
  const discountPercent = useCallback(() => {
    if (discountStart < discountEnd) {
      setDiscountStart(discountStart + 1);
    }
  }, [discountStart, discountEnd]);
  
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
            <div>
            <MyButton/>
          </div>
          </div>
         
        </Slide>
      </div>
    </div>
  );
}

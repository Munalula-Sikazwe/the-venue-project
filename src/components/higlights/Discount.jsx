import React from "react";
import { useState } from "react";
import { Fade, Slide } from "react-reveal";

export default function Discount() {
  const [discountStart, setDiscountStart] = useState(0);
  const [discountEnd, setDiscountEnd] = useState(30);

    const discountPercent = () => {
        if (discountStart < discountEnd) {
            setDiscountStart(discountStart + 1);
        }
    }
    
  return (
    <div className={"center_wrapper"}>
      <div className={"discount_wrapper"}>
        <Fade
        onReveal={discountPercent}
        >
          <div className={"discount_porcentage"}>
            <span>{discountStart}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide>
        <div className={"discount_description"}>
          <h3>Purchase tickets before 20th June</h3>
          <p>Order now while stocks last</p>
        </div>
        </Slide>
       
      </div>
    </div>
  );
}

import React from 'react';
import { useState } from 'react';

export default function Discount() {
    const [discount, setDiscount] = useState(30); 
  return (
    <div
    className={"center_wrapper"}

    >
        <div
        className={"discount_wrapper"}
        >
            <div className={"discount_porcentage"}>
<span>{discount}%</span>
<span>OFF</span>
            </div>
        </div>
    </div>
  )
}

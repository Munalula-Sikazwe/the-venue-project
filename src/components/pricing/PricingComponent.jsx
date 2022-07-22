import React from "react";
import MyButton from "../ui/MyButton";
import { useState } from "react";
import { Zoom } from "react-reveal";
export default function PricingComponent() {
  const [prices] = useState([100, 150, 250]);
  const [positions] = useState(["Balcony", "Medium", "Star"]);
  const [desc] = useState([
    "This is a test description",
    "This is a test description",
    "This is a test description",
  ]);
  const [delay] = useState([500, 0, 500]);
  return (
    <div className={"bck_black"}>
      <div className={"center_wrapper pricing_section"}>
        <h2>Pricing</h2>
        <div className={"pricing_wrapper"}>

            {prices.map((price, index) =>(
                <Zoom delay={delay[index]} key={index}>
 <div className={"pricing_item"}>
                    <div className={"pricing_inner_wrapper"}>
                        <div className={"pricing_title"}>
                            <span>${price}</span>
                            <span>{positions[index]}</span>
                        </div>
                        <div className={"pricing_description"}>
                            {desc[index]}
                        </div>
                        <div className={"pricing_buttons"}>
<MyButton bck={"#ffa800"} link={"https://google.com"} color={"#fff"} text={"Purchase"}/>
                        </div>
                    </div>
                </div>
                </Zoom>
               
            ) )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Tuerchen.css"
import {TuerchenConfig} from "./Adventskalender";

export const Tuerchen: React.FunctionComponent<{cfg: TuerchenConfig, openTuerchen: () => void, widthMultiplier:number, heightMultiplier:number }> = ({cfg, openTuerchen,widthMultiplier=1,heightMultiplier= 1 }) => {
    return <div onClick={openTuerchen} className={"Tuerchen"} style={{left:cfg.x*widthMultiplier, top:cfg.y*heightMultiplier, width: `${100*widthMultiplier}px`,
        height: `${100*heightMultiplier}px`}}>
        <p className={"Tuerchen-font"}>
            {cfg.day}
        </p>
    </div>
}
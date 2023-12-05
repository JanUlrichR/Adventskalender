import React from "react";
import "./Tuerchen.css"
import {TuerchenConfig} from "./Adventskalender";

export const Tuerchen: React.FunctionComponent<{cfg: TuerchenConfig, openTuerchen: () => void, refWidth:number, refHeight:number }> = ({cfg, openTuerchen,refWidth=1,refHeight= 1 }) => {
    const multiplier = Math.max( window.innerWidth / refWidth, window.innerHeight / refHeight);

    return <div onClick={openTuerchen} className={"Tuerchen"} style={{left:`${cfg.x/refWidth*100}%`, top:`${cfg.y/refHeight*100}%`, width: `${100*multiplier}px`,
        height: `${100*multiplier}px`}}>
        <p className={"Tuerchen-font"}>
            {cfg.day}
        </p>
    </div>
}
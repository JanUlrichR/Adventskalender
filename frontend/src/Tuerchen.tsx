import React from "react";
import "./Tuerchen.css"
import {TuerchenConfig} from "./Adventskalender";

export const Tuerchen: React.FunctionComponent<{cfg: TuerchenConfig, openTuerchen: () => void }> = ({cfg, openTuerchen }) => {
    return <div onClick={openTuerchen} className={"Tuerchen"} style={{left:cfg.x, top:cfg.y}}>
        <p className={"Tuerchen-font"}>
            {cfg.day}
        </p>
    </div>
}
import React, {useState} from "react";
import {TuerchenContent} from "./TuerchenContent";
import {Tuerchen} from "./Tuerchen";

import "./Adventskalender.css"


export interface TuerchenConfig {
    day: number;
    title?: string;
    md: string;
    openable: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
}

const debug = false


export const Adventskalender: React.FunctionComponent<{}> = ({}) => {
    const [currentTuerchen, setCurrentTuerchen] = useState<TuerchenConfig | undefined>(undefined);
    const [config, setConfig] = useState<TuerchenConfig[]>([]);

    const openTuerchen = (tuerchenConfig: TuerchenConfig) => setCurrentTuerchen(tuerchenConfig)
    const closeTuerchen = () => setCurrentTuerchen(undefined)

    if (debug) console.log(config)

    const addTuerchen = (e: React.MouseEvent<HTMLElement>) => {
        if (!debug) return
        const widthHeight = 100;
        setConfig(curr => [...curr, {
            day: curr.length + 1,
            md: "Ping",
            openable: false,
            x: e.pageX - widthHeight / 2,
            y: e.pageY - widthHeight / 2,
            width: widthHeight,
            height: widthHeight,
        }])
        console.log(e)
    }


    return <div className={"Adventskalender"} style={{
        backgroundImage: "url(" + "https://cdn.discordapp.com/attachments/108572403575058432/1180946764728123453/lenbei_snowy_village_at_night_24_houses_advent_calendar_e64baf5c-9c7b-4ffa-8b31-b15428849e44.png?ex=657f4561&is=656cd061&hm=8125c5ad344670e41357884cb46f35f9ced2be05892a9122631e52857e263523&" + ")",
    }}
                onClick={addTuerchen}
    >
        {config.map(tc => <Tuerchen cfg={tc} openTuerchen={() => tc.openable ? openTuerchen(tc) : {}}/>)}
        {currentTuerchen && <TuerchenContent tuerchenConfig={currentTuerchen} closeModal={closeTuerchen}/>}
    </div>
}

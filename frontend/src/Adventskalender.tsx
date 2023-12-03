import React, {useState} from "react";
import {TuerchenContent} from "./TuerchenContent";
import {Tuerchen} from "./Tuerchen";

import "./Adventskalender.css"


export interface TuerchenConfig {
    day: number,
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
    const [config, setConfig] = useState<TuerchenConfig[]>([
        {day: 1, md: "# Hi, *Pluto*!", openable: true, x: 100, y: 100, width: 100, height: 100},
        {
            day: 2,
            md: "# Hi, *Pluto2*! [Test](https://google.com)",
            openable: true,
            x: 300,
            y: 300,
            width: 100,
            height: 100
        },
        {day: 3, md: "# Hi, *Pluto3*!", openable: false, x: 500, y: 500, width: 100, height: 100},
    ]);

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
        backgroundImage: "url(" + "https://www.farmeramania.de/wp-content/blogs.dir/19/files/2020/12/Wallpaper-Winter-kalender-2020.jpg" + ")",
    }}
                onClick={addTuerchen}
    >
        {config.map(tc => <Tuerchen cfg={tc} openTuerchen={() => tc.openable ? openTuerchen(tc) : {}}/>)}
        {currentTuerchen && <TuerchenContent tuerchenConfig={currentTuerchen} closeModal={closeTuerchen}/>}
    </div>
}

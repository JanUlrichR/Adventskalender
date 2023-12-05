import React, {useState} from "react";
import {TuerchenContent} from "./TuerchenContent";
import {Tuerchen} from "./Tuerchen";
import {
    useQuery,
} from '@tanstack/react-query'

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

export interface AdventskalenderConfig {
    bgUrl: string;
    refHeight: number;
    refWidth:number;
    tuerchenConfigs:TuerchenConfig[];
}

const debug = false


export const Adventskalender: React.FunctionComponent<{}> = ({}) => {
    const [currentTuerchen, setCurrentTuerchen] = useState<TuerchenConfig | undefined>(undefined);


    const { isLoading, error, data } = useQuery({
        queryKey: ['tuerchen'],
        queryFn: () =>
            fetch('http://server.robens.tech/advent/api/tuerchen').then(
                (res) => res.json(),
            ),
    })

    if (isLoading) return <>Loading</>

    if (error) return <>'An error has occurred: ' + error.message</>
    const adventskalenderConfig = data.message as AdventskalenderConfig

    const openTuerchen = (tuerchenConfig: TuerchenConfig) => setCurrentTuerchen(tuerchenConfig)
    const closeTuerchen = () => setCurrentTuerchen(undefined)
    console.log(data)
    if (debug) console.log(data);

    /*const addTuerchen = (e: React.MouseEvent<HTMLElement>) => {
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
    }*/



    return <div className={"Adventskalender"} style={{
        backgroundImage: "url(" + adventskalenderConfig.bgUrl + ")",
    }}
    >
        {adventskalenderConfig.tuerchenConfigs.map(tc => <Tuerchen cfg={tc} openTuerchen={() => tc.openable ? openTuerchen(tc) : {}} refHeight={ adventskalenderConfig.refHeight} refWidth={adventskalenderConfig.refWidth}/>)}
        {currentTuerchen && <TuerchenContent tuerchenConfig={currentTuerchen} closeModal={closeTuerchen}/>}
    </div>
}

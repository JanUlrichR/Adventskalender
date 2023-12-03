import React, {useState} from "react";
import {TuerchenContent} from "./TuerchenContent";
import {Tuerchen} from "./Tuerchen";

// TODO als json, weil noch bg info usw
const adventskalenderConfig: TuerchenConfig[] = [
    {day: 1, md: "# Hi, *Pluto*!", openable: true},
    {day: 2, md: "# Hi, *Pluto2*!", openable: true},
    {day: 3, md: "# Hi, *Pluto3*!", openable: false},
]

export interface TuerchenConfig {
    day: number,
    md: string;
    openable: boolean;
}


export const Adventskalender: React.FunctionComponent<{}> = ({}) => {
    const [currentTuerchen, setCurrentTuerchen] = useState<TuerchenConfig | undefined>(undefined);

    const openTuerchen = (tuerchenConfig: TuerchenConfig) => setCurrentTuerchen(tuerchenConfig)
    const closeTuerchen = () => setCurrentTuerchen(undefined)

    return <div>
        {adventskalenderConfig.map(tc => <Tuerchen day={tc.day} openTuerchen={() => tc.openable ? openTuerchen(tc): {}}/>)}
        {currentTuerchen && <TuerchenContent tuerchenConfig={currentTuerchen} closeModal={closeTuerchen}/>}
    </div>
}

import React from "react";
import Markdown from 'react-markdown';
import {TuerchenConfig} from "./Adventskalender";
export const TuerchenContent: React.FunctionComponent<{ tuerchenConfig: TuerchenConfig, closeModal: () => void}> = ({ tuerchenConfig}) => {

    return    <div>
        <Markdown>{tuerchenConfig.md}</Markdown>
    </div>
}
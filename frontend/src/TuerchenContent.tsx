import React from "react";
import Markdown from 'react-markdown';
import {TuerchenConfig} from "./Adventskalender";
import Modal from 'react-modal';
export const TuerchenContent: React.FunctionComponent<{ tuerchenConfig: TuerchenConfig, closeModal: () => void}> = ({ tuerchenConfig, closeModal}) => {

    return    <Modal
        isOpen={true}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
    >
        <Markdown>{tuerchenConfig.md}</Markdown>
    </Modal>
}
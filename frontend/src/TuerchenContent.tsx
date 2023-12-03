import React from "react";
import Markdown from 'react-markdown';
import {TuerchenConfig} from "./Adventskalender";
import Modal from 'react-modal';

export const TuerchenContent: React.FunctionComponent<{ tuerchenConfig: TuerchenConfig, closeModal: () => void }> = ({
                                                                                                                         tuerchenConfig,
                                                                                                                         closeModal
                                                                                                                     }) => {

    const markdown = `
# Tag ${tuerchenConfig.day} ${tuerchenConfig.title ? tuerchenConfig.title: ""}  

${tuerchenConfig.md}
    `


    console.log(markdown)

    return <Modal
        isOpen={true}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
            content: {
                inset: "10% 25%",
                backgroundColor: "rgba(255, 255, 255, 0.75)"
            }, overlay: {
                backgroundColor: "rgba(255, 255, 255, 0.25)"
            }
        }}
    >
        <div style={{display: "flex", justifyContent: "center"}}>
            <div>
                <Markdown>
                    {markdown}
                </Markdown>
            </div>
        </div>
    </Modal>
}
import React from "react";

export const Tuerchen: React.FunctionComponent<{day: number, openTuerchen: () => void }> = ({day, openTuerchen }) => {
    return <div onClick={openTuerchen}>{day}</div>
}
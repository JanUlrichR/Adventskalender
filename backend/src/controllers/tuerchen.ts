import { Request, Response, NextFunction } from 'express';
import {calendarConfig} from "./tuerchenData";

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



const getTuerchen = async (req: Request, res: Response, next: NextFunction) => {
    const today = new Date();

    return res.status(200).json({
        message: calendarConfig.map(config => {
            const available = today.getDate() >= config.day;

            return {
                ...config,
                openable: available,
                title: available? config.title: "",
                md: available? config.md: ""
            }
        })
    });
};




export default { getTuerchen };
import { NextFunction, Request, Response } from 'express';

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'pong'
    });
};

export default { getAllBooks };

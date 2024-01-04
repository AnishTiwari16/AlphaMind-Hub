import { NextFunction, Request, Response } from 'express';
export default function errorHandler({
    statusCode,
    err,
    res,
    req,
    next,
}: {
    statusCode: number;
    err: unknown;
    res: Response;
    req: Request;
    next: NextFunction;
}) {
    if (res.headersSent) {
        return next(err);
    }
    console.log('ERROR MIDDLWARE CALLED');
    res.status(statusCode || 500).json({ status: false, message: err });
}

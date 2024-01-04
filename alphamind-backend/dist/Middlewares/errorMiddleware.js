"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler({ statusCode, err, res, req, next, }) {
    if (res.headersSent) {
        return next(err);
    }
    console.log('ERROR MIDDLWARE CALLED');
    res.status(statusCode || 500).json({ status: false, message: err });
}
exports.default = errorHandler;

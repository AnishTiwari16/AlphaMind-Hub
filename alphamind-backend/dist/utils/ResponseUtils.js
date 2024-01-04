"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponse = void 0;
const createResponse = (status, message, data) => {
    return {
        status,
        message,
        data,
    };
};
exports.createResponse = createResponse;

export const createResponse = (
    status: boolean,
    message: string,
    data?: any
) => {
    return {
        status,
        message,
        data,
    };
};

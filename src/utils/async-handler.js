// export const asyncHandler = (callback) => {
//     () => {
//         Promise.resolve(callback()).catch(error => next(error));
//     };
// };


export const asyncHandler = (callback) => async (req, res, next) => {
    try {
        await callback(req, res, next);
    }
    catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
};

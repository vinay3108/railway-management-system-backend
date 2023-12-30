import { validationResult }from 'express-validator';

export const catchValidationError =(req,res,next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Validation failed', errors: errors.array() });
    }

    next(); // Proceed to the next middleware or route handler
};

export const catchAsyncErrors =theFunc=> (req,res,next) => {
const validationMiddleware = validationResult.withDefaults({
        formatter: (error) => ({ msg: error.msg, param: error.param }),
    });

    // Run validation on the request
    validationMiddleware(req);

    // Check for validation errors
    const validationErrors = validationMiddleware(req).array();

    if (validationErrors.length > 0) {
    // If there are validation errors, return a response with a 400 status code
    return res.status(400).json({ message: 'Validation failed', errors: validationErrors });
    }

    // If there are no validation errors, proceed to execute theFunc
    Promise.resolve(theFunc(req, res, next)).catch(next);
};


export const successMessage = (message='',statusCode=200) =>{
    return {
        statusCode,
        code:'success',
        message
    }
}
export const failureMessage = (message='',statusCode=422) =>{
    return {
        statusCode,
        code:'failure',
        message
    }
}
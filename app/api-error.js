class ApiError extends Error {
    constructor(statusCode, message){
        super();
        this.statusCode = statutsCode;
        this.message = message;
    }
}

module.exports = ApiError;
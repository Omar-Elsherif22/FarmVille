import joi from "joi"

// Register
export const register = joi.object({
    userName: joi.string().min(3).max(20).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    phone: joi.string().pattern(new RegExp('^(20)?01[0-25][0-9]{8}$')).required(),
    password: joi.string().min(6).max(20).required(),
    confirmPassword: joi.string().valid(joi.ref("password")).required(),
}).required();


// Login
export const login = joi.object({
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: joi.string().min(6).max(20).required(),
}).required();

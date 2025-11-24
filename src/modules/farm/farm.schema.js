import joi from "joi"

// create Farm
export const createFarm = joi.object({
    name: joi.string().min(3).max(100).required(),
    location: joi.string().required(),
}).required();

// createFarmReads
export const createFarmReads = joi.object({
    temp: joi.number().required(),
    moisture: joi.number().required(),
    cond: joi.number().required(),  
    ph: joi.number().required(),
    nitrogen: joi.number().required(),
    phosphorus: joi.number().required(),
    potassium: joi.number().required(),
    salinity: joi.number().required(),
    airTemp: joi.number().required(),
}).required();
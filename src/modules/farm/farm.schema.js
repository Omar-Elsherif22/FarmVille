import joi from "joi"

// create Farm
export const createFarm = joi.object({
    name: joi.string().min(3).max(100).required(),
    location: joi.string().required(),
}).required();

// createFarmReads
export const createFarmReads = joi.object({
    temperature: joi.number().required(),
    moisture: joi.number().required(),
    conductivity: joi.number().required(),  
    ph: joi.number().required(),
    nitrogen: joi.number().required(),
    phosphorus: joi.number().required(),
    potassium: joi.number().required(),
    Salinity: joi.number().required(),
}).required();
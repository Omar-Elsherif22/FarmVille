import { Farm } from "../../../DB/models/farm.model.js";
import { Reads } from "../../../DB/models/reads.model.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const createFarm = asyncHandler(async (req, res, next) => {
    // data from request
    const { name, location } = req.body;
    // create farm in db
    await Farm.create({
        name,
        location,
        user: req.user._id
    });
    // send response
    return res.status(201).json({ success: true, message: "Fram created successfully!" })
});

export const createFarmReads = asyncHandler(async (req, res, next) => {
    // data from request
    const { temperature, moisture, conductivity, ph, nitrogen, phosphorus, potassium, Salinity } = req.body;
    // validate farm existence
    const farm = await Farm.findOne({ user: req.user._id });
    if (!farm)
        return next(new Error("You need to create a farm first!", { cause: 404 }));
    // create farm reads in db
    await Reads.create({
        farmId: farm._id,
        temperature,
        moisture,
        conductivity,
        ph,
        nitrogen,
        phosphorus,
        potassium,
        Salinity
    });
    // send response
    return res.status(201).json({ success: true, message: "Farm reads created successfully!" })
});

export const getFarms = asyncHandler(async (req, res, next) => {
    // get farm reads from db
    const farm = await Farm.findOne({ user: req.user._id });
    if (!farm)
        return next(new Error("You need to create a farm first!", { cause: 404 }));
    // get farm reads from db
    const reads = await Reads.find({ farmId: farm._id });
    // send response
    return res.json({ success: true, results: reads })
});
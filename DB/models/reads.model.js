import { Schema, Types, model } from "mongoose";

const readsSchema = new Schema({
    farmId: { type: Types.ObjectId, ref: "Farm", required: true },
    // 8 sensor attributes
    temp: Number,
    moisture: Number,
    cond: Number,
    ph: Number,
    nitrogen: Number,
    phosphorus: Number,
    potassium: Number,
    salinity: Number,
    airTemp: Number,
}, { timestamps: true });

export const Reads = model("Reads", readsSchema);
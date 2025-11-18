import { Schema, Types, model } from "mongoose";

const readsSchema = new Schema({
    farmId: { type: Types.ObjectId, ref: "Farm", required: true },
    // 8 sensor attributes
    temperature: Number,
    moisture: Number,
    conductivity: Number,
    ph: Number,
    nitrogen: Number,
    phosphorus: Number,
    potassium: Number,
    Salinity: Number,
}, { timestamps: true });

export const Reads = model("Reads", readsSchema);
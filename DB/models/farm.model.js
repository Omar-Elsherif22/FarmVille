import { Schema, Types, model } from "mongoose";

const farmSchema = new Schema({
    user: { type: Types.ObjectId, ref: "User", required: true },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    location: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const Farm = model("Farm", farmSchema);
import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 20,
    },
    gender: { type: String, enum: ["male", "female"] },
    phone: { type: String },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
},
    { timestamps: true }
);

// hash password hook
userSchema.pre("save", function () {
    if (this.isModified("password")) {
        this.password = bcryptjs.hashSync(this.password, parseInt(process.env.SALT_ROUND));
    }
});


export const User = model("User", userSchema);
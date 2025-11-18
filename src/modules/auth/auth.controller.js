import { User } from "../../../DB/models/user.model.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { Token } from "../../../DB/models/token.model.js";
import bcryptjs from "bcryptjs";


// Register
export const register = asyncHandler(async (req, res, next) => {
    // data from request
    const { email } = req.body;
    // check user existence
    const user = await User.findOne({ email });
    if (user)
        return next(new Error("user already exist!", { cause: 409 }));
    // create user + hash password (using hash password hook)
    await User.create({ ...req.body });
    // send Response
    return res.status(201).json({ success: true, message: "user created successfully!" });
});


// Login 
export const login = asyncHandler(async (req, res, next) => {
    // data from request
    const { email } = req.body;
    // check user existence
    const user = await User.findOne({ email });
    if (!user)
        return next(new Error("invalid email!", { cause: 404 }));
    // check user password
    const match = bcryptjs.compareSync(req.body.password, user.password)
    if (!match)
        return next(new Error("invalid password!", { cause: 400 }));
    // generate token
    const token = jwt.sign({ email, id: user._id }, process.env.TOKEN_SECRET);
    // Save token in token model
    await Token.create({ token, user: user._id, agent: req.headers['user-agent'] });
    // send response
    return res.json({ success: true, rseults: { token } });
});
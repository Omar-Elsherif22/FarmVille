import { Router } from "express";
import { validation } from "../../middleware/validation.middleware.js";
import * as farmController from "./farm.controller.js"
import * as farmSchema from "./farm.schema.js"
import { isAuthenticated } from "../../middleware/authentication.middleware.js";
import { isAuthorized } from "../../middleware/authorization.middleware.js";

const router = Router();

// Create Farm
router.post("/",
    isAuthenticated,
    isAuthorized("user"),
    validation(farmSchema.createFarm),
    farmController.createFarm
);

// create Farm reads
router.post("/reads",
    isAuthenticated,
    isAuthorized("user"),
    validation(farmSchema.createFarmReads),
    farmController.createFarmReads
);

// Get Farms
router.get("/",
    isAuthenticated,
    isAuthorized("user"),
    farmController.getFarms
);

export default router;
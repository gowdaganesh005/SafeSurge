import { Router } from "express";
import { upload } from "../Middlewares/multer.middleware.js";

import { verifyJWT } from "../Middlewares/auth.middleware.js";
import { deleteReport, registerMissing } from "../Controllers/missing.controllers.js";


const missingRouter=Router()

missingRouter.route("/add-missing").post(verifyJWT,
    upload.fields([
        {
            name:"avatar",
            maxCount: 1
        }
        
    ]),
    registerMissing
)
missingRouter.route("/delete-missing").post(verifyJWT,deleteReport)

export default missingRouter
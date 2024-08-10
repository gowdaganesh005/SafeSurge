import { Missing } from "../models/Missing.model.js";
import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { AsyncHandler } from "../utils/AsyncHandler.js"
import { uploadOnCloudinary } from "../utils/Cloudinary.js"




const registerMissing=AsyncHandler(async (req,res,next)=>{
    console.log(req)
    const {name,age,phoneNumber,address}=req.body

    

    
    const avatarlocalPath=req.files?.avatar[0]?.path;

    if(!avatarlocalPath){
        throw new ApiError(400,"Avatar is required")
    }

    const avatar =await uploadOnCloudinary(avatarlocalPath)

    

    
    

    const missingPerson=await Missing.create({
        name,age,phoneNumber,address,
        avatar:avatar?.url || "",
        userId:req.user._id
        
    })

    const createdUser=await Missing.findById(missingPerson._id).select("-userId")

    if(!createdUser){
        return next( new ApiError(500,"Something went wrong while regestering report Try Again !!!"))

    }

    const reg=await User.findByIdAndUpdate(req.user._id,{ $push: { missingReports: createdUser._id } },{ new: true, useFindAndModify: false })

    return res.status(200)
    .json(
        new ApiResponse(200,
            createdUser,
            "Successfully Registered Report"
        )
    )


})

const deleteReport=async (req,res)=>{
    const id=req.body
    try {
        await Missing.findByIdAndDelete(id)
        
    } catch (error) {
        throw new ApiError(500,"could not delete the report ")
    }
    

    return res.status(200).json(
        new ApiResponse(
            200,{},"Deleted complain successfully"
        )
    )

}
const getAllMissingReports = async (req, res) => {
    try {
      const reports = await Missing.find(); // Fetch all reports
      res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ message: "Server error." });
    }
  }


export {
    registerMissing,deleteReport,getAllMissingReports,
}
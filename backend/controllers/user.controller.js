import User from "../models/user.model.js";
import ApiError from "../utilis/apiError.js";
import { ApiResponse } from "../utilis/apiResponse.js";
import { asyncHandler } from "../utilis/asyncHandler.js";


// =============function to get all user except logged in user=======================
export const getUserForSideBar = asyncHandler(async (req, res) => {
    const loggedInUser=req.user._id;
    console.log("loggedInUser",loggedInUser,req.user)
    const users = await User.find({_id:{$ne:loggedInUser}}).select("-password -refreshToken");
    console.log("users",users)
    if(users.length===0){
        throw new ApiError(500,"Something went wrong while fetching users");
    }
    res.status(200).json(new ApiResponse(200,users,"Users fetched successfully"));
})
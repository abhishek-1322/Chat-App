import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import ApiError from "../utilis/apiError.js";

export const verifyJWT=async (req,res,next)=>{
    try {
        console.log("inside jwt",req.cookies)
        const token=req?.cookies?.access_token || req?.headers?.authorization?.split(" ")[1];
        console.log("headers",req.headers.authorization?.split(" ")[1],req.cookies?.access_token)
        console.log("inside jwt",token, process.env.ACCESS_TOKEN_SECRET)
        if(!token){
            throw new ApiError(401,"Unauthorized");
        }
        const decodedToken=jwt?.verify(token,process.env.ACCESS_TOKEN_SECRET);
        console.log("decodedToken",decodedToken);
        const user=await User.findById(decodedToken?.id).select("-password -refreshToken");
        console.log("user",user);
        if(!user){
            throw new ApiError(401,"Invalid Access Token");
        }
        
        req.user=user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token");
    }
}


// export const verifyJWT = async (req, res, next) => {
//     try {
//         const token = req.cookies?.access_token || req.headers?.authorization?.split(" ")[1];
//         console.log("Token:", token);

//         if (!token) {
//             return next(new ApiError(401, "Unauthorized - No Token Provided"));
//         }

//         // Verify the token
//         const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//         console.log("Decoded Token:", decodedToken);

//         // Find the user
//         const user = await User.findById(decodedToken?.id).select("-password -refreshToken");
//         if (!user) {
//             return next(new ApiError(401, "Invalid Access Token - User Not Found"));
//         }

//         // Attach user to request
//         req.user = user;
//         next();
//     } catch (error) {
//         if (error.name === "TokenExpiredError") {
//             return next(new ApiError(401, "Token has expired"));
//         } else if (error.name === "JsonWebTokenError") {
//             return next(new ApiError(401, "Invalid Token"));
//         } else {
//             return next(new ApiError(401, error.message || "Authentication failed"));
//         }
//     }
// };

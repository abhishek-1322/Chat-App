import User from "../models/user.model.js"
import ApiError from "../utilis/apiError.js"
import { ApiResponse } from "../utilis/apiResponse.js"
import { asyncHandler } from "../utilis/asyncHandler.js"

// ===================function to generate access and refresh token==============
const generateAccessAndRefreshToken=async(userId)=>{
    try{
        const user=await User.findById({_id:userId});
        console.log("inside genreate tkoken",user)
        const accessToken=await user.generateAccessToken();
        const refreshToken=await user.generateRefreshToken();
        console.log("gen",accessToken,refreshToken)
        user.refreshToken=refreshToken;
        user.save({
            validateBeforeSave:false //consition to save the refresh token ian db without validate
        })
        console.log("user after refresh token",user)
        return {
            accessToken,
            refreshToken
        }
    }
    catch(error){
        throw new ApiError(500,"Something went wrong while generating access and refresh token");
    }
}

// ==================controller for signup user===================
export const signupUser=asyncHandler(async(req,res)=>{
    console.log("inside signup",req.body)
    const{fullName,email,username,password,confirmPassword,gender}=req.body;
    // ======validate condition to check all fields are not empty======
    if([username,fullName,email,password].some((field)=> field?.trim()==="")){
        throw new ApiError(400,"All fields are required");
    }
    // ============check password and confirm password matches or not=============
    if(password!==confirmPassword){
        return res.json(new ApiError(400,"Password does not match"))
    }
    const existingUser=await User.find({
        $or:[{username},{email}]
    })
    console.log("existingUser",existingUser,existingUser.length)
    if(existingUser.length > 0){
        console.log("inside if existingUser")
        return res.json(new ApiError(400,"User already exists"))
    }
    const profilePic= gender === "Male" ?`https://avatar.iran.liara.run/public/boy?username=${username}` : `https://avatar.iran.liara.run/public/girl?username=${username}`;

    console.log("profilePic",profilePic)

    const newUser=await User.create({
        fullName,
        email,
        username,
        password,
        profilePic,
        gender
    })
    const userResponse = await User.findById(newUser._id).select("-password");
    res.status(200)
    .json(
        new ApiResponse(200,
            userResponse,
            "User logged in successfully"
        )
    )
})

// =================controller for login User=====================
export const loginUser = asyncHandler(async (req, res) => {
    const {username,email,password}=req.body;
    if(username==="" && email===""){
        throw new ApiError(400,"Username or Email is required");
    }
    const user=await User.findOne({
        $or:[{ username },{ email }]
    });
    console.log("login in user",user)
    if(!user){
        throw new ApiError(401,"User does not exists");
    }
    const isPasswordCorrect=await user.isPasswordMatched(password);
    if(!isPasswordCorrect){
        throw new ApiError(401,"Invalid user credentials");
    }
    const {accessToken,refreshToken}=await generateAccessAndRefreshToken(user?._id?.valueOf());

    // ========after saving refresh token to db get user details again ===========
    const loggedInUser=await User.findById(user._id).select("-password -refreshToken");
    if(!loggedInUser){
        throw new ApiError(500,"Something went wrong while login user");
    }
    // ==========options for cookies=========
    const options={
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly:true, //prevent XXS attack cross site scripting attacks
        secure:true
    }

    // =========SAVE REFRESH TOKEN AND ACCESS TOKEN IN COOKIES & SEND RESPONSE============
    res.status(200)
    .cookie("access_token",accessToken,options)
    .cookie("refresh_token",refreshToken,options)
    .json(
        new ApiResponse(200,
            {
                loggedInUser,
                accessToken,
                refreshToken
            },
            "User logged in successfully"
        )
    )
    
})

// =========================LOGOUT USER===========================
export const logoutUser=asyncHandler(async(req,res)=>{
    console.log("req.user",req,req.user,req?.user?._id.valueOf())
    const logOutUser= await User.findByIdAndUpdate(
        {_id:req.user._id.valueOf()},
        {
            $unset:{
                refreshToken:1
            }
        },
        {
            new:true
        })
    // ==========options for cookies=========
    const options={
        maxAge:0,
        httpOnly:true,
        secure:true
    }

    // =========SAVE REFRESH TOKEN AND ACCESS TOKEN IN COOKIES & SEND RESPONSE============
    res.status(200)
    .clearCookie("access_token",options)
    .clearCookie("refresh_token",options)
    .json(
        new ApiResponse(200,
            {},
            "User logout successfully"
        )
    )
})


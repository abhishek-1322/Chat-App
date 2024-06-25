import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import ApiError from "../utilis/apiError.js"
import { ApiResponse } from "../utilis/apiResponse.js"
import { asyncHandler } from "../utilis/asyncHandler.js"


export const getMessages = asyncHandler(async (req, res) => {
    const senderId = req.user._id.valueOf();
    const receiverId = req.params.id;

    console.log("receiverId", receiverId, "senderId", senderId);

    const conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] }
    }).populate("messages");

    console.log("conversation", conversation);
    let messages = conversation?.messages || [];

    if (!conversation) {
        return res.status(404).json(new ApiResponse(200, [], "Messages fetched successfully"));
    }

    res.status(200).json(new ApiResponse(200, messages, "Messages fetched successfully"));
});


export const sendMessage = asyncHandler(async (req, res) => {
    const receiverId = req.params.id;
    const { message } = req.body;
    const senderId = req.user._id.valueOf();

    console.log("senderId", senderId, "receiverId", receiverId, "message", message);

    // Check if the message is provided
    if (!message) {
        return res.status(400).json(new ApiError(400, "Message is required"));
    }

    // Find or create the conversation
    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] }
    });

    console.log("conversation", conversation);

    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
            messages: []
        });
        console.log("inside if conversation", conversation);
    }

    // Create the new message
    const newMessage = new Message({
        senderId,
        receiverId,
        message
    });

    console.log("newMessage", newMessage);

    // Add the new message to the conversation
    conversation.messages.push(newMessage._id);

    await Promise.all([conversation.save(), newMessage.save()]);    
    res.status(201).json(new ApiResponse(200, newMessage, "Message sent successfully"));
});

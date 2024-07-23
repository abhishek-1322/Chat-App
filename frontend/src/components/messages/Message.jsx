import { useAuthContext } from "../../context/authContext";
import { useConversation } from "../../zustand/useConversation";

export const Message = ({ message }) => {
  console.log("message", message);
  const { currentAuthUser } = useAuthContext(); 
  const { selectedConversation } = useConversation();
  console.log("currentAuthUser", currentAuthUser, selectedConversation);

  const isUser = message.senderId === currentAuthUser?.loggedInUser?._id;

  return (
    <div
      key={message._id}
      className={`flex items-center gap-3 mb-3 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`w-10 h-10 rounded-full bg-light-gray-400 ${isUser ? "order-2" : "order-1"}`}
      >
        <img
          src={
            isUser
              ? currentAuthUser?.loggedInUser?.profilePic
              : selectedConversation?.profilePic
          }
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div
        className={`w-3/4 bg-light-gray-400 p-3 rounded-lg ${isUser ? "order-1" : "order-2"}`}
      >
        <p className={`text-sm ${isUser ? "text-right" : "text-left"}`}>
          {message.message}
        </p>
      </div>
    </div>
  );
};

import ChatbotIcon from "./ChatbotIcon";
import ReactMarkdown from 'react-markdown';

export const ChatMessage = ({ chat }) => {
  return (
    !chat.hideInChat && (
      <div
        className={`message ${chat.role === "model" ? "bot" : "user"}-message ${
          chat.isError ? "error" : ""
        }`}
      >
        {chat.role === "model" && <ChatbotIcon />}
        <div className="message-text">
        <ReactMarkdown>{chat.text}</ReactMarkdown>
        </div>
      </div>
    )
  );
};

export default ChatMessage;

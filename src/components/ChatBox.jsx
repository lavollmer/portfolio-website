//Code imported from https://gist.githubusercontent.com/FredrikOseberg/21ad31cad1298ead0115719cce8587f0/raw/b040f8a4f76123be005d1e3748639ea632e18a52/Chatbot.jsx
import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

function ChatBox() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatBox;

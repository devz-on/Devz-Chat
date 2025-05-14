// import React from "react";

import ChatHeader from "./components/chat-header";
import MessageBar from "./components/message-bar";
import MessageContainer from "./components/message-container";

const ChatContainer = () => {
  return (
<div className="fixed top-0 inset-0 bg-[#1c1d25] flex flex-col md:static md:flex-1" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <ChatHeader />
      <MessageContainer />
      <MessageBar />
    </div>
  );
};

export default ChatContainer;

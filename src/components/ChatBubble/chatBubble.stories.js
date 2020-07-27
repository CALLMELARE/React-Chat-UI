import React from "react";
import ChatBubble from ".";
import VoiceMessage from "components/VoiceMessage";

export default {
  title: "UI 组件/ChatBubble(消息气泡)",
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const FromOthers = () => (
  <ChatBubble time="昨天 下午14：26">这是一条其它人发送的聊天消息</ChatBubble>
);

export const Mine = () => (
  <ChatBubble type="mine" time="昨天 下午16：30">
    这是一条我自己发送的聊天消息
  </ChatBubble>
);

export const VoiceMessageType = () => (
  <ChatBubble time="昨天 下午18：30">
    <VoiceMessage time="01:24" />
  </ChatBubble>
);

export const VoiceMessageTypeMine = () => (
  <ChatBubble type="mine" time="昨天 下午18：30">
    <VoiceMessage type="mine" time="01:24" />
  </ChatBubble>
);
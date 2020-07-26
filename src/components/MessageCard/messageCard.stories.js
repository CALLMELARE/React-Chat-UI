import React from "react";
import MessageCard from ".";

import face from "assets/images/face.png";

export default {
  title: "UI 组件/MessageCard(消息卡片)",
  component: MessageCard,
};

export const Default = () => (
  <MessageCard
    avatarSrc={face}
    name="LARE"
    avatarStatus="online"
    statusText="在线"
    time="3 小时之前"
    message="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
  />
);

export const Active = () => (
  <MessageCard
    avatarSrc={face}
    name="LARE"
    avatarStatus="online"
    statusText="在线"
    time="3 小时之前"
    message="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
    active
  />
);

export const RepliedActive = () => (
  <MessageCard
    avatarSrc={face}
    name="LARE"
    avatarStatus="online"
    statusText="在线"
    time="3 小时之前"
    message="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
    active
    replied
  />
);

export const RepliedInactive = () => (
  <MessageCard
    avatarSrc={face}
    name="LARE"
    avatarStatus="online"
    statusText="在线"
    time="3 小时之前"
    message="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
    replied
  />
);

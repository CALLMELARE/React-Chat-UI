import React from "react";
import PropTypes from "prop-types";
import StyledConversation, { Conversations, MyChatBubble } from "./style";
import TitleBar from "components/TitleBar";
import ChatBubble from "components/ChatBubble";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";
import Footer from "components/Footer";
import { useSpring } from "react-spring";

function Conversation({ onAvatarClick, onVideoClicked, children, ...rest }) {
  const tBarAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(0px, -50px, 0px)" },
    delay: 500,
  });

  const convsAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(50px, 0px, 0px)" },
    delay: 800,
  });

  const ftAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(0px, 50px, 0px)" },
    delay: 950,
  });

  return (
    <StyledConversation {...rest}>
      <TitleBar
        onVideoClicked={onVideoClicked}
        onAvatarClick={onAvatarClick}
        animeProps={tBarAnimeProps}
      />
      <Conversations style={convsAnimeProps}>
        <ChatBubble time="昨天 下午14：26">Hi 小乙，忙什么呢？</ChatBubble>
        <MyChatBubble time="昨天 下午16：30">
          Hello 啊！最近就是一直在学习。
        </MyChatBubble>
        <ChatBubble time="昨天 下午18：30">
          <VoiceMessage time="01:24" />
        </ChatBubble>
        <MyChatBubble time="昨天 下午16：30">
          明天一起出来吃饭吧！
          <Emoji label="smile">🤘</Emoji>
        </MyChatBubble>
        <ChatBubble time="昨天 下午16：33">没问题！老地方见。</ChatBubble>
      </Conversations>
      <Footer animeProps={ftAnimeProps} />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;

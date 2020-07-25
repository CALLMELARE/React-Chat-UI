import React from 'react';
import Avatar from ".";
import face from 'assets/images/face.png';

import 'story.css';

export default {
    title: "Avatar",
    component: Avatar
}

export const Default = () => {
    return <div className="row-elements">
        <Avatar src={face} />
    </div>
}

export const Sizes = () => {
    return <div className="row-elements">
        <Avatar src={face} size="48px" />
        <Avatar src={face} size="56px" />
        <Avatar src={face} size="64px" />
        <Avatar src={face} size="72px" />
    </div>
}

export const WithStatus = () => {
    return <div className="row-elements">
        <Avatar src={face} status="online" />
        <Avatar src={face} status="offline" />
    </div>
}
import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from 'assets/icon/smile.svg';

export default {
    title: "UI 组件/Icon",
    component: Icon
}

export const Default = () => <Icon icon={SmileIcon} />;

export const CustomColor = () => {
    return <Icon icon={SmileIcon} color="#CCCCCC" />;
}

export const CustomSize = () => {
    return <Icon icon={SmileIcon} width={48} height={48} />
}
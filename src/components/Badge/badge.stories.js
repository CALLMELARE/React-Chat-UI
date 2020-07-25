import React from "react";
import Badge from ".";

export default {
    title: "UI 组件/Badge(徽章)",
    component: Badge
}

export const Default = () => <Badge count={5}></Badge>;

export const DotVariant = () => {
    return <Badge show variant="dot">

    </Badge>
}
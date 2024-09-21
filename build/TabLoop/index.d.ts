import React from "react";
export interface ITabLoopProps {
    children: React.ReactElement | string;
    enableTabLoop?: boolean;
}
declare function TabLoop({ enableTabLoop, children }: ITabLoopProps): string | JSX.Element;
export default TabLoop;

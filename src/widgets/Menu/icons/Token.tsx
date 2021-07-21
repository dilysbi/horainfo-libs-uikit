import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
       <g id="Group_390" data-name="Group 390" transform="translate(-28.731 -259.731)">
    <g id="Ellipse_12" data-name="Ellipse 12" transform="translate(28.731 259.731)" fill="none" stroke="#0aabff" stroke-width="2">
      <circle cx="14" cy="14" r="14" stroke="none"/>
      <circle cx="14" cy="14" r="13" fill="none"/>
    </g>
    <g id="Ellipse_13" data-name="Ellipse 13" transform="translate(35.731 266.731)" fill="none" stroke="#0aabff" stroke-width="2">
      <circle cx="7" cy="7" r="7" stroke="none"/>
      <circle cx="7" cy="7" r="6" fill="none"/>
    </g>
  </g> </Svg>
  );
};

export default Icon;

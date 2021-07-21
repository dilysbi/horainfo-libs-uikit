import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <g id="Group_394" data-name="Group 394" transform="translate(316.75 -339.014)">
        <path id="Path_548" data-name="Path 548" d="M-304.168,340.949A13.16,13.16,0,0,0-315.75,354.01a13.16,13.16,0,0,0,13.158,13.158,13.16,13.16,0,0,0,13.082-11.732" transform="translate(0 -0.841)" fill="none" stroke="#0aabff" stroke-miterlimit="10" stroke-width="2"/>
        <path id="Path_549" data-name="Path 549" d="M-278.02,340.679a13.157,13.157,0,0,1,13.158,13.155" transform="translate(-24.572 -0.665)" fill="none" stroke="#0aabff" stroke-miterlimit="10" stroke-width="2"/>
        <path id="Path_550" data-name="Path 550" d="M-278.02,339.658v14.114H-263.9" transform="translate(-24.571 -0.604)" fill="none" stroke="#0aabff" stroke-miterlimit="10" stroke-width="2"/>
      </g>  
    </Svg>
  );
};

export default Icon;

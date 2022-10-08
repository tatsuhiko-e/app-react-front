import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { relative } from "path";


interface Buttonstyle {
  onClick?: () => void,
  children?: string
  icon: any,
}

const IconButton = styled.button`
  font-family: "Noto Sans JP";
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display: block;
  border: none;
  height: 40px;
  background-color: "bulue";
  width: 80%;
  min-width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  border: none;
  border-radius: 20px;
  background-color: #1DA1F2;
`;

const TwitterButton: React.FC<Buttonstyle> = ({ onClick, children, icon }) => {
  return (
    <>
      <IconButton onClick={onClick}>
        <FontAwesomeIcon icon={icon} style={{fontSize:"30px", float: "left", marginLeft:"16px", color: "#fff" }} />
        <div style={{position:"relative", right:"10px"}}>{children}</div>
      </IconButton>
    </>
  )
};

export default TwitterButton;
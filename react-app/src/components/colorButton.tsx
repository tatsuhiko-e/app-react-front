import React from "react";
import styled from "styled-components";

interface Buttonstyle {
  onClick?: () => void,
  children?: string
  type: "submit" | "button" | "reset",
  disabled?: boolean,
  colorType: "default" | "red" | "blue",
}


const ColorButton: React.FC<Buttonstyle> = ({ onClick, children, disabled, type, colorType }) => {
  let buttonColor = ""
  switch (colorType) {
    case "red":
      buttonColor = "ffffff"
      console.log(buttonColor)
      break;
    case "blue":
      buttonColor = "9ac1f0";
      break;
    case "default":
      buttonColor = "FFFFFF"
      break;
  }

  const ColorButton = styled.button<{ buttonColor: any }>`
  display: block;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
  border: 0;
  height: 48px;
  width: 80%;
  min-width: 40px;
  margin: 8px;
`;

  return <ColorButton buttonColor={buttonColor} type={type} disabled={disabled} onClick={onClick}>{children}</ColorButton>;
};


export default ColorButton;
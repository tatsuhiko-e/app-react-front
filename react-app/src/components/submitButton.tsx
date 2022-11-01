import React from "react";
import styled from "styled-components";

interface Buttonstyle {
  onClick?: () => void,
  children?: string
  type?: "submit" | "button" | "reset",
  disabled?: boolean,
  changeColor?: boolean
}

const BlueButton = styled.button`
  display: block;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  background: -moz-linear-gradient(left, #65abff, #0059ff);
  background: -webkit-linear-gradient(left, #65abff, #0059ff);
  background: linear-gradient(to left, #87bdff, #bc6fff);
  border-radius: 30px;
  border: 4px solid #ececec;
  height: 48px;
  width: 80%;
  min-width: 100px;
  margin: auto;
  &:active {
    background: -webkit-linear-gradient(left, #974ed7, #699edf);

  }
`;

const RedButton = styled.button`
  display: block;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  background: -moz-linear-gradient(to left, #ff7171, #bc6fff);
  background: -webkit-linear-gradient(to left, #ff7171, #fff36f);
  background: linear-gradient(to left, #fb5959, #fff86f);
  border-radius: 30px;
  border: 3px solid #ececec;
  height: 48px;
  width: 80%;
  min-width: 100px;
  margin: auto;
  &:active {
    background: -webkit-linear-gradient(left, #974ed7, #cd4e4e);
  }
`



const SubmitButton: React.FC<Buttonstyle> = ({ onClick, children, disabled, type, changeColor }) => {
  const SubmitColorButton = changeColor ? RedButton : BlueButton;
  return <SubmitColorButton type={type} disabled={disabled} onClick={onClick}>{children}</SubmitColorButton>;
};

export default SubmitButton;
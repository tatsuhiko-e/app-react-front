import React from "react";
import styled from "styled-components";

interface Buttonstyle {
  onClick?: () => void,
  children?: string
  type?: "submit" | "button" | "reset",
  disabled?: boolean
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
`;

const RedButton = styled.button`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  background: -moz-linear-gradient(left, #65abff, #0059ff);
  background: -webkit-linear-gradient(left, #65abff, #0059ff);
  background: linear-gradient(to left, #ff7171, #bc6fff);
  border-radius: 30px;
  border: 3px solid #ececec;
  height: 48px;
  width: 80%;
  min-width: 100px;
`



const Button: React.FC<Buttonstyle> = ({ onClick, children, disabled, type }) => {
  return <BlueButton disabled={disabled} onClick={onClick} type="submit">{children}</BlueButton>;
};

export default Button;
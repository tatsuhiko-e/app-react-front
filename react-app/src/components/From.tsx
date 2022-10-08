import React, { useMemo } from "react";
import styled from "styled-components";

interface Buttonstyle {
  onChange: any,
  placeholder?: string,
  value?: string,
  name?: string,
  error?: any
}

const BaseInput = styled.input`
  display: block;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  color: #363636;
  text-align: center;
  border-radius: 30px;
  border: none;
  background-color:#dadada;
  height: 40px;
  width: 80%;
  min-width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
`;

const Input: React.FC<Buttonstyle> = ({ onChange, placeholder, value }) => {
  return (
    <>
      <BaseInput value={value}  onChange={onChange} placeholder={placeholder} />
    </>
  )
};

export default Input;
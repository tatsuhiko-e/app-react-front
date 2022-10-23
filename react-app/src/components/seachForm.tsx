import React, { useMemo } from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@material-ui/core";
import SearchButton from "./IconButton";

interface ButtonStyle {
  type?: string,
  placeholder?: string,
  onInput?: any,
}

const SeachInputStyle = styled.input`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  color: #363636;
  text-align: center;
  border-radius: 30px;
  border: none;
  background-color:#f9f9f9;
  height: 40px;
  width: 300px;
`;



const FormContainer = styled.div`
  display: flex;
  position: relative;
  width: 400px;
`

const SeachInput: React.FC<ButtonStyle> = ({ placeholder, onInput, type }) => {
  return (
    <FormContainer>
      <SeachInputStyle
        type={type}
        onInput={onInput}
        placeholder={placeholder}
      />
      <SearchButton />
    </FormContainer>
  )
};

export default SeachInput;
import React from "react";
import { relative } from "path";
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";

interface Buttonstyle {
  onClick?: () => void,
  children?: string
  icon?: any,
}

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 30px;
  background-color: transparent;
  position: absolute;
  left: 260px;
`



const SearchButton: React.FC<Buttonstyle> = ({ onClick }) => {
  return (
    <div>
      <IconButton onClick={onClick}>
        <SearchIcon style={{marginTop: "7px"}} />
      </IconButton>
    </div>
  )
};

export default SearchButton;
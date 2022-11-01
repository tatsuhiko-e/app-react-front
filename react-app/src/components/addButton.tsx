import React from "react";
import styled from "styled-components";
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface Buttonstyle {
  children?: string
}

const AddButtonLabel = styled.p`
  font-size: 16px;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  color: #008528;
  position: relative;
  margin-left: 4px;
  top: 7px;
`


const AddButton: React.FC<Buttonstyle> = ({ children }) => {
  return(
    <div style={{display: "flex"}}>
      <AddCircleIcon color="success" style={{fontSize:"40px"}} />
      <AddButtonLabel>{children}</AddButtonLabel>
    </div>
  )
};


export default AddButton;
import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


interface Buttonstyle {
  children: string,
  title: string,
  active: boolean
}

const ConfirmModal: React.FC<Buttonstyle> = ({ children, title, active }) => {
  return (
    <>

    </>
  )
};

export default ConfirmModal;
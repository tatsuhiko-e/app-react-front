import React, { useState, useEffect, ReactNode } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  margin-bottom: 32px;
  padding: 32px;
  background: #e7e7e7;
  overflow: scroll;
  border-radius: 10px;
  width: 90%;
`

const PageTitle = styled.h1`
  display: block;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  color: #363636;
  font-size: 28px;
  margin-top: 16px;
  margin-bottom: 8px;
  text-align: center;
`

interface propsType {
  title: string,
  children: ReactNode
}

export const PageLayout: React.FC<propsType> = ({title, children}) => {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <Container>
        {children}
      </Container>
    </>
  );
}

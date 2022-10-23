import React, { useState, useEffect, FC } from "react"
import styled from "styled-components"
import { device } from '../deviceSize';
import media from "styled-media-query";
import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

interface DefaultFormType {
  onChange: (event: any) => void,
  value: string,
  type?: string,
  label: string
}

const FormLabel = styled.div`
  font-size: 16px;
  display: block;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  color: #363636;
  margin-left: 8px;
  margin-top: 16px;
`

const DefaultFormStyle = styled(Input)`
  width: 90%;
  height: 32px;
  margin: 4px auto 0px auto;
  border-radius: 8px;
`

const DefaultTextareaStyle = styled(TextArea)`
  width: 90%;
  height: 32px;
  margin: 4px auto 8px 0;
  border-radius: 8px;
`

const DefaultForm: React.FC<DefaultFormType> = ({ onChange, value, type, label }) => {
  return (
    <div>
      <FormLabel>{label}</FormLabel>
      <DefaultFormStyle type={type} value={value} onChange={onChange} />
    </div>
  )
}

export const DefaultTextarea: React.FC<DefaultFormType> = ({ onChange, value, type, label }) => {
  return (
    <div>
      <FormLabel>{label}</FormLabel>
      <DefaultTextareaStyle value={value} onChange={onChange} />
    </div>
  )
}

export default DefaultForm

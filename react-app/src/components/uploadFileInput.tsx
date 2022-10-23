import { IconButton } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import { Input } from "antd";

interface Buttonstyle {
  onClick?: () => void,
  type?: "input",
  disabled?: boolean,
  changeColor?: boolean
}

const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
`

const Inputstyle = styled(Input)`
  height: 32px;
  margin-top: 14px;
`

const UploadButton: React.FC<Buttonstyle> = () => {
  return (
    <div style={{display: "flex" }}>
      <IconButton color="primary" aria-label="upload" component="label" style={{marginTop:"4px"}}>
        <input hidden accept="image/*" type="file" />
        <AudiotrackIcon />
        <Label>アップロード</Label>
      </IconButton>
      <Inputstyle disabled={true} placeholder={"楽曲をアップロード"} />
    </div>
  )
};

export default UploadButton;
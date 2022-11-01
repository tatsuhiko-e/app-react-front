import { IconButton } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import { Input } from "antd";

interface Buttonstyle {
  onClick?: () => void,
  type?: "input",
  disabled?: boolean,
  changeColor?: boolean,
  value?: any,
  onChange?: any,
}

const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
`

const Inputstyle = styled(Input)`
  height: 32px;
  margin-top: 14px;
`

const UploadButton: React.FC<Buttonstyle> = (value, onChange) => {
  return (
    <div style={{ display: "flex" }}>
      <IconButton color="primary" aria-label="upload" component="label" style={{ marginTop: "4px" }}>
        <input hidden onChange={onChange} name="file"
          type="file"
          accept="image/*" />
        <AudiotrackIcon />
        <Label>アップロード</Label>
      </IconButton>
      <Inputstyle disabled={true} placeholder={"楽曲をアップロード"} />
    </div>
  )
};

export default UploadButton;
import React from 'react';
import Button from './components/Button';
import Input from './components/From';
import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'

const passCheckLists: {id: number, label: string, checked: boolean}[] = [
  { id: 0, label: "8文字以上", checked: false },
  { id: 1, label: "大小英文字、数字の全てを含む", checked: false }
]

function App() {
  const [passwordText, setPasswordText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [confirmPasswordText, setConfirmPasswordText] = useState("");

  const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const Box = styled.section`
    width: 400px;
    height: 600px;
    border: solid;
  `

  const ChangePassCheck = (e: any) => {
    setPasswordText(() => e.target.value)
    if (e.target.value.length >= 8) {
      passCheckLists[0].checked = true
    } else {
      passCheckLists[0].checked = false
    }
    const ratz = /[a-z]/, rAtZ = /[A-Z]/, r0t9 = /[0-9]/;
    if (ratz.test(e.target.value) && rAtZ.test(e.target.value) &&r0t9.test(e.target.value)){
      passCheckLists[1].checked = true
    } else {
      console.log("gsdfgs")
      passCheckLists[1].checked = false
    }
  }

  const ChangeConfimPassCheck = (e: any) => {
    setConfirmPasswordText(() => e.target.value)
    if (passwordText == e.target.value) {
      console.log("asdfasdfaf")
    }

  }

  const ChangeEmailCheck = (e: any) => {
    setEmailText(() => e.target.value)
  }

  return (
    <div className="App" style={{display: "flex", flexFlow: "column"}}>


        <Input value={emailText} onChange={ChangeEmailCheck} placeholder={"email"} />
        <Input value={passwordText} onChange={ChangePassCheck} placeholder={"password"} />
        {passCheckLists.map((list) =>
          <label htmlFor="mycheckbox" style={{display: "flex"}}>
            <input
              defaultChecked={list.checked}
              name="mycheckbox"
              type="checkbox"
            />
            {list.label}
          </label>
        )}
        <Input value={confirmPasswordText} onChange={ChangeConfimPassCheck} placeholder={"Confirm Password"} />
        <Button onClick={() => console.log("Hello")}>{"text"}</Button>

 
    </div>
  );
}

export default App;

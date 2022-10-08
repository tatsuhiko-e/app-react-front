import React, { useCallback, useMemo } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import Input from '../components/From';
import Button from '../components/Button';
import { Controller, useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import IconButton from '../components/IconButton';
import { faTwitter } from "@fortawesome/free-brands-svg-icons"


const passCheckLists: { id: number, label: string, checked: boolean }[] = [
  { id: 0, label: "8文字以上", checked: false },
  { id: 1, label: "大小英文字、数字の全てを含む", checked: false }
]

export const SignUpPage = () => {
  const {
    setValue,
    watch,
    handleSubmit,
    control,
    setError,
    formState: { errors }
  } = useForm();

  const watchEmailField = watch("email")
  const watchPassField = watch("password")
  const watchConfPassField = watch("confirmPassword")

  const [passwordText, setPasswordText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [confirmPasswordText, setConfirmPasswordText] = useState("");

  const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const onSubmit = (data: {}) => {
    console.log(data)
  }

  return (
    <>
      <div style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(#90c2ff, #9841e4)"
      }}>
        <div style={{
          width: "64%",
          minWidth: "320px",
          maxWidth: "480px",
          height: "640px",
          border: "none",
          borderRadius: 10,
          background: "#f9f9f9"
        }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 style={{
              textAlign: "center",
              fontFamily: "Noto Sans JP",
              fontSize: "40px"
            }}>IMEMO</h1>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input onChange={onChange} value={value} placeholder={"email"} />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Input onChange={onChange} value={value} placeholder={"password"} error={error} />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <Input onChange={onChange} value={value} placeholder={"confirm password"} />
              )}
            />
            <Button type="submit" children='sign up' />
            <div style={{textAlign: "center", marginTop: "4px"}}>会員登録されている方は<Link to="/login">こちら</Link>へ</div>
            <hr style={{width: "90%", marginTop: "32px", marginBottom: "32px"}} />
            <IconButton icon={faTwitter}>Twitterで会員登録</IconButton>
          </form>
        </div>
      </div>
    </>
  );
}

import React, { useCallback, useMemo } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import SignInput from '../components/from';
import Button from '../components/submitButton';
import { Controller, useForm } from "react-hook-form";
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import IconButton from '../components/IconButton';
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import SubmitButton from '../components/submitButton';
import { type } from 'os';


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

  const navigate = useNavigate()

  const watchEmailField = watch("email")
  const watchPassField = watch("password")
  const watchConfPassField = watch("confirmPassword")

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
        background: "#dddddd"
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
            }}><Link to="/Home">よさこいミュージック（仮）</Link></h1>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <SignInput onChange={onChange} value={value} placeholder={"email"} />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <SignInput  type={"password"} onChange={onChange} value={value} placeholder={"password"} error={error} />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <SignInput type={"password"} onChange={onChange} value={value} placeholder={"confirm password"} />
              )}
            />
            <SubmitButton type={"submit"} children='sign up' />
            <div style={{textAlign: "center", marginTop: "8px"}}>会員登録されている方は<Link to="/login">こちら</Link>へ</div>
            <hr style={{width: "90%", marginTop: "32px", marginBottom: "32px"}} />
            <SubmitButton onClick={() => navigate('/Login')} changeColor={true} type={"button"} children='チームアカウントはこちら' />
          </form>
        </div>
      </div>
    </>
  );
}

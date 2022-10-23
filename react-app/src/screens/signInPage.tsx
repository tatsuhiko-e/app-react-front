import React, { useCallback, useEffect, useMemo } from 'react';
import { useState } from 'react';
import { Home } from './homePage';
import styled from 'styled-components'
import SignInput from '../components/from';
import { Controller, useForm } from "react-hook-form";
import { Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import SubmitButton from '../components/submitButton';

export const SignInPage = () => {
  const {
    setValue,
    watch,
    handleSubmit,
    control,
    setError,
    formState: { errors }
  } = useForm();

  const location = useLocation();

  useEffect(() => {
    console.log(location)  
  },[location]);

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
          height: "560px",
          border: "none",
          borderRadius: 10,
          background: "#f9f9f9",
        }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 style={{
              textAlign: "center",
              fontFamily: "Noto Sans JP",
              fontSize: "40px"
            }}><NavLink to="/Home">よさこいミュージック（仮）</NavLink></h1>
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
                <SignInput type={"password"} onChange={onChange} value={value} placeholder={"password"} error={error} />
              )}
            />
            <SubmitButton type={"submit"} children='sign in' />
            <div style={{ textAlign: "center", marginTop: "8px" }}>会員登録されている方は<Link to="/SignUp">こちら</Link>へ</div>
            <hr style={{ width: "90%", marginTop: "32px", marginBottom: "32px" }} />
            <SubmitButton changeColor={true} type={"button"} children='チームアカウントはこちら' />
          </form>
        </div>
      </div>
    </>
  );
}

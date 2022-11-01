import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, createContext } from 'react';
import styled from 'styled-components'
import { SignUpPage } from './screens/signUpPage';
import { getCurrentUser } from './lib/api/auth';
import { User } from "./interfaces/index"
import { SignInPage } from './screens/signInPage';
import { Dashboard } from './screens/dashbord';
import { MusicDelivary } from './screens/musicDelivary';
import { EventSetting } from './screens/eventSetting';
import { Home } from './screens/homePage';
import { PostMusicPage } from './screens/postMusicPage';
import { EditMusicPage } from './screens/editMusicPage';


export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
})

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>()

  // 認証済みのユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()
      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        console.log(res?.data.data)
        setCurrentUser(res?.data.data)

        console.log("currentUser")
        console.log(res?.data.data)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
      console.log("errororororrr")
    }
    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  const Private = ({ children }: any) => {
    if (!loading) {
      if (isSignedIn) {
        return children
      } else {
        return <Navigate to="/login" />
      }
    } else {
      return <></>
    }
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser }}>
        <Routes>
          <Route path={`/signUp`} element={<SignUpPage />} />
          <Route path={`/login`} element={<SignInPage />} />
          <Route path={`/home`} element={<Home />} />
          <Route path={`/dashboard`} element={<Dashboard />} />
          <Route path={`/delivery-music`} element={<MusicDelivary />} />
          <Route path={`/event-setting`} element={<EventSetting />} />
          <Route path={`/delivery-music/:musicId/edit-music`} element={<EditMusicPage />} />
          <Route path={`/delivery-music/post-music`} element={<PostMusicPage />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;

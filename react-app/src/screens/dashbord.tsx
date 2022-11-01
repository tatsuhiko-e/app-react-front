import React, { useCallback, useMemo, useState, ReactNode, Fragment, useContext } from 'react';
import styled from 'styled-components'
import { Home } from './homePage';

import { AuthContext } from "../App"
import Cookies from 'js-cookie';
import { signOut } from '../lib/api/auth';


export const Dashboard = () => {
  const { isSignedIn, currentUser, setIsSignedIn } = useContext(AuthContext)

  console.log(currentUser)
  return (
    <Home>
      {
        isSignedIn && currentUser ? (
          <>

            <h1>Signed in successfully!</h1>
            <h2>Email: {currentUser?.email}</h2>
            <h2>Name: {currentUser.team_name}</h2>
            <h2>Name: {currentUser?.id}</h2>
          </>
        ) : (
          <h1>Not signed in</h1>
        )
      }
      dashboard
    </Home>
  );
}

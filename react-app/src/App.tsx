import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { SignUpPage } from './ screen/SignUpPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<SignUpPage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;

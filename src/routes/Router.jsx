import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage/SigninPage"
import ROUTES from './ROUTES'
const Router = () => {
  return (
    <Routes>
        <Route path={ROUTES.HOME} element={<HomePage/>}/>
        <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
        <Route path={ROUTES.REGISTER} element={<LoginPage/>}/>
    </Routes>
  )
}

export default Router

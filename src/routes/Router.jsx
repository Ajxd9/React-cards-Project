import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ROUTES from "./ROUTES";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import DashboardPage from "../pages/DashboardPage"
import EditCardPage from "../pages/EditCardPage"
import CreateCardPage from "../pages/CreateCardPage"
import AboutPage from "../pages/AboutPage"
import EditUserProfilePage from '../pages/EditUserProfilePage';
import UserCardsPage from '../pages/UserCardsPage';
import FavoriteCardsPage from '../pages/FavoriteCardsPage';
import UserProfilePage from '../pages/UserProfilePage';
const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserProfilePage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUserProfilePage />} />
      <Route path={ROUTES.SANDBOX} element={<DashboardPage/>}/>
      <Route  path={`${ROUTES.EDITCARD}/:id`} element={<EditCardPage/>}/>
      <Route  path={ROUTES.EDITCARD} element={<EditCardPage/>}/>
      <Route  path={ROUTES.MY_CARD} element={<UserCardsPage/>}/>
      <Route  path={ROUTES.FAV_CARD} element={<FavoriteCardsPage/>}/>
      <Route  path={ROUTES.CREATECARD} element={<CreateCardPage/>}/>   
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;



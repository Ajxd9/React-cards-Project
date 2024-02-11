import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ROUTES from "./ROUTES";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import DashboardPage from "../pages/DashboardPage"
import EditCardPage from "../pages/EditCardPage/EditCardPage"
import CreateCardPage from "../pages/CreateCardPage/CreateCardPage"
import AboutPage from "../pages/AboutPage/AboutPage"
import EditUserProfilePage from '../pages/EditUserProfile/EditUserProfilePage';
import UserCardsPage from '../pages/ProfilePage/UserCardsPage';
import FavoriteCardsPage from '../pages/FavoriteCardsPage/FavoriteCardsPage';
import UserProfilePage from '../pages/ProfilePage/UserProfilePage';
import FirstComponent from "./../sandbox/components/FirstComponent";
import FatherComponent from "../sandbox/components/fatherchild/FatherComponent";
import SandboxPage from "../sandbox/pages/SandboxPage";
import LifeCycleHooksPage from "../sandbox/pages/LifeCycleHooksPage";
const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
      <Route path={ROUTES.SIGNUP} element={<RegisterPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserProfilePage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUserProfilePage />} />
      <Route path={ROUTES.SANDBOX} element={<DashboardPage/>}/>
      <Route  path={`${ROUTES.EDITCARD}/:id`} element={<EditCardPage/>}/>
      <Route  path={ROUTES.EDITCARD} element={<EditCardPage/>}/>
      <Route  path={ROUTES.MY_CARD} element={<UserCardsPage/>}/>
      <Route  path={ROUTES.FAV_CARD} element={<FavoriteCardsPage/>}/>
      <Route  path={ROUTES.CREATECARD} element={<CreateCardPage/>}/>
      <Route path="/sandbox" element={<SandboxPage />}>
        <Route path="first-component" element={<FirstComponent />} />
        <Route path="fc" element={<FatherComponent />} />
        <Route path="lch" element={<LifeCycleHooksPage />} />
      </Route>   
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;



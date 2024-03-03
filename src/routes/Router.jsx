import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ROUTES from "./ROUTES";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import CreateCardPage from "../pages/CreateCardPage/CreateCardPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import EditUserProfilePage from "../pages/EditUserProfile/EditUserProfilePage";
import UserCards from "../pages/ProfilePage/UserCards";
import FavoriteCardsPage from "../pages/FavoriteCardsPage/FavoriteCardsPage";
import UserProfilePage from "../pages/ProfilePage/UserProfilePage";
import CardViewPage from "../pages/CardView/CardViewPage";
import BizGuard from "../guard/AdminGuard";
import AuthGuard from "../guard/AuthGuard";
import AdminGuard from "../guard/AdminGuard";
import AdminDash from "../pages/AdminPages/AdminDash";
const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SIGNUP} element={<RegisterPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserProfilePage />} />
      <Route path={ROUTES.MY_CARD} element={<UserCards />} />
      <Route path={ROUTES.FAV_CARD} element={<FavoriteCardsPage />} />
      <Route path={`${ROUTES.CARDS}/:id`} element={<CardViewPage />} />
      <Route
        path={ROUTES.Edit_User}
        element={
          <AuthGuard>
            <EditUserProfilePage/>
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.CREATECARD}
        element={
          <BizGuard>
            <CreateCardPage />
          </BizGuard>
        }
      />
      <Route
        path={`${ROUTES.EDITCARD}/:id`}
        element={
          <BizGuard>
            <EditCardPage />
          </BizGuard>
        }
      />
      <Route
        path={ROUTES.ADMIN_DASH}
        element={
          <AdminGuard>
            <AdminDash />
          </AdminGuard>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;

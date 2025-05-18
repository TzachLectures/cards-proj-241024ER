import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "./../pages/CardsPage";
import FavoriteCardsPage from "./../pages/FavoriteCardsPage";
import MyCardsPage from "./../pages/MyCardsPage";
import AboutPage from "./../pages/AboutPage";
import LoginPage from "./../pages/LoginPage";
import RegisterPage from "./../pages/RegisterPage";
import ErrorPage from "../pages/ErrorPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<CardsPage />} />
      <Route path="/favorite" element={<FavoriteCardsPage />} />
      <Route path="/my-cards" element={<MyCardsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Router;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const { currentUser } = useSelector((state) => state.users);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateComponent;

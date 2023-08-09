import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogoutAction } from "../redux/features/LoginChecker";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(LogoutAction());
    Cookies.remove("userId");
    Cookies.remove("username");
    navigate("/");
  }, []);
  return <>Logout..</>;
}

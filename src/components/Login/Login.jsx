import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../redux/features/LoginChecker";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (Cookies.get("userId")) {
      navigate("/menu");
      dispatch(LoginAction());
    }
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://62.72.27.124/api/user/login", {
        password,
      });
      const userId = res.data.user.id;
      const username = res.data.user.username;
      Cookies.set("userId", userId, { expires: 1 });
      Cookies.set("username", username, { expires: 1 });
      dispatch(LoginAction());
      navigate("/menu");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <LoginForm
        password={password}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

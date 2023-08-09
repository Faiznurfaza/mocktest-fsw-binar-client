import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction, LogoutAction } from "../redux/features/LoginChecker";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loginchecker.isLoggedIn);
  let userId = Cookies.get("userId");

  const LoginCheck = () => {
    if (userId !== undefined) {
      dispatch(LoginAction());
    } else {
      dispatch(LogoutAction());
    }
  };

  useEffect(() => {
    LoginCheck();
  }, [userId]);

  return (
    <div className="navbar bg-emerald-600 px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-white hover:text-blue-400">
        Home
      </Link>
      <nav className="p-4">
        {isLoggedIn ? (
          <Link
            key="logout-link"
            to="/logout"
            className="nav-link text-white hover:text-blue-400"
          >
            Logout
          </Link>
        ) : (
          <Link
            key="login-link"
            to="/"
            className="nav-link text-white hover:text-blue-400"
          >
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

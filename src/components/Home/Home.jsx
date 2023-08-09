import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import List from "./List";

export default function Home() {
  const navigate = useNavigate();
  const isLoggedIn = Cookies.get("userId");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  });

  return (
    <div>
      <List />
    </div>
  );
}

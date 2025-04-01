import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/undefined") {
      navigate("/"); // Redirect to home if the path is "/undefined"
    }
  }, [location, navigate]);

  return null; // This component doesn't render anything
}

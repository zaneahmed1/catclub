import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, logOut } from "../Services/Firebase";
import Home from "../Pages/Home"
import "../Components/Login.css"



export const Login = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/loggedInPage");
    }
  }, [user, navigate]);

  return (
    <div>
      <section>
        <div>
          <button className="button" onClick={signInWithGoogle}>Sign in with Google</button>
          <button className="button"  onClick={logOut}> Sign Out</button>
      </div>
        {/* <Home/> */}
      </section>

    </div>
  );
};
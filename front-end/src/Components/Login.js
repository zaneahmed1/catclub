import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, logOut } from "../Services/Firebase";
import Home from "../Pages/Home"
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'



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
        <Home/>
        <div>
          <Button onClick={signInWithGoogle}>Sign in with Google</Button>
          <Button onClick={logOut}> Sign Out</Button>
      </div>
      </section>

    </div>
  );
};
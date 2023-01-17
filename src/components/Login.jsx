import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  InputAdornment,
  IconButton,
  Alert,
  AlertTitle,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { api } from "../utils/axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const image = "/images/background1.jpg";
  const innerBackground = "/images/innerBackground3.jpg";
  const logo = "/images/logo.png";

  const [error, setError] = React.useState(false);
  const [pClicked, setPClicked] = React.useState(false);
  const handlePClick = () => {
    setPClicked((preValue) => !preValue);
  };

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/user/login", {
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          const user = {
            token: response.data.token,
            email: response.data.user.email
          }
          localStorage.setItem("user", JSON.stringify(user));

          dispatch({ type: 'LOGIN', payload: user })

          console.log(`logged in ${user}`);
          toast.success('Welcome!',
            {
              style: {
                borderRadius: '10px',
                background: '#031B34',
                color: '#fff',
              }
            });
          navigate("/");

        }
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div
      style={{
        height: '100vh',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="registerForm"
    >
      <div
        style={{
          minHeight: "80%",
          width: "72%",
          display: "grid",
          gridTemplateColumns: "30% 70%",
          backgroundImage: `url(${innerBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "5px",
          marginTop: '3rem'
        }}
        className="registerBox"
      >
        <div
          className="leftSide"
          style={{
            minWidth: "100%",
            minHeight: "100%",
          }}
        >
          <img style={{ margin: "1rem 0 0 1rem" }} src={logo} alt="logo" />
          <p
            style={{
              fontFamily: "Bebas Neue",
              margin: "1rem 0 0 1rem",
              color: "white",
              fontSize: "1.4rem",
            }}
          >
            Sentiment Analysis and Your Mood Companion.
          </p>
          <img
            className="floating"
            style={{
              maxWidth: "25%",
              maxHeight: "50%",
              position: "absolute",
              left: "16%",
              bottom: "15%",
            }}
            src="/images/float.png"
            alt="float"
          />
        </div>
        <div
          className="rightSide"
          style={{
            backgroundColor: "white",
            borderRadius: "40px 0 0 40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // borderRadius: "5px",
          }}
        >
          <div
            style={{ margin: "3.5rem", width: "100%" }}
            className="signUpForm"
          >
            {error && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
              </Alert>
            )}
            <div
              style={{
                fontSize: "1.5rem",
                fontFamily: "Bebas Neue",
                margin: "1rem 0",
                textAlign: "center",
              }}
              className="login"
            >
              Login
            </div>

            <form className="form">
              <TextField
                variant="standard"
                label="Email Address"
                fullWidth
                size="normal"
                margin="dense"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
              <TextField
                variant="standard"
                label="Password"
                fullWidth
                size="normal"
                margin="dense"
                name="password"
                onChange={handleChange}
                value={formData.password}
                type={pClicked ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={handlePClick}>
                      <IconButton>
                        {pClicked ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Link
                style={{
                  fontFamily: "Playfair Display",
                  fontWeight: "bold",
                  color: "#707070",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  display: "inline-block",
                  textDecoration: "none",
                  marginTop: "0.5rem",
                }}
                to="/forgotPassword"
              >
                Forgotten Password?
              </Link>
            </form>
            <div style={{ margin: "2rem 0", textAlign: "center" }}>
              <button onClick={handleSubmit} className="createAccountButton">
                Login
              </button>
            </div>
            <div className="haveAccount">
              <p
                style={{
                  fontFamily: "Playfair Display",
                  fontWeight: "bold",
                  color: "#3B3B3B",
                }}
              >
                Don't Have An Account?
                <Link
                  style={{ textDecoration: "none", color: "#707070" }}
                  to="/register"
                >
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

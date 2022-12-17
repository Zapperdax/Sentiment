import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useLocation } from "react-router-dom";
import { api } from "../utils/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const image = "/images/background1.jpg";
  const innerBackground = "/images/innerBackground3.jpg";
  const logo = "/images/logo.png";
  const [pClicked, setPClicked] = React.useState(false);
  const handlePClick = () => {
    setPClicked((preValue) => !preValue);
  };
  const [CPClicked, setCPClicked] = React.useState(false);
  const handleCPClick = () => {
    setCPClicked((preValue) => !preValue);
  };

  const [formData, setFormData] = React.useState({
    password: "",
    cPassword: "",
  });

  const handleClick = () => {
    api
      .patch("/user/changePassword", {
        email: location.state.email,
        password: formData.password,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/login");
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  console.log(formData);
  console.log(location.state.email);
  return (
    <div
      style={{
        height: "100vh",
        alignSelf: "center",
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
          marginTop: "3rem",
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
            borderRadius: "5px",
          }}
        >
          <div
            style={{ margin: "3.5rem", width: "100%" }}
            className="signUpForm"
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontFamily: "Bebas Neue",
                marginBottom: "1rem",
                textAlign: "center",
              }}
              className="login"
            >
              Change Password
            </div>

            <form className="form">
              <TextField
                variant="standard"
                label="Password"
                fullWidth
                size="normal"
                margin="dense"
                onChange={handleChange}
                name="password"
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
              <TextField
                variant="standard"
                label="Confirm Password"
                fullWidth
                size="normal"
                margin="dense"
                name="cPassword"
                onChange={handleChange}
                value={formData.cPassword}
                type={CPClicked ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={handleCPClick}>
                      <IconButton>
                        {CPClicked ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
            <div style={{ margin: "2rem 0", textAlign: "center" }}>
              <button onClick={handleClick} className="createAccountButton">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

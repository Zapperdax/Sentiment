import React from "react";
import { Link } from "react-router-dom";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { api } from "../utils/axios";

function RegisterPage() {
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
    userName: "",
    email: "",
    password: "",
    cPassword: "",
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
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/newUser", {
        name: formData.userName,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        if (response.status === 201) {
          const token = JSON.stringify(response.data.token);
          localStorage.setItem("userToken", token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="registerForm"
    >
      <div
        style={{
          minHeight: "80%",
          width: "70%",
          display: "grid",
          gridTemplateColumns: "30% 70%",
          backgroundImage: `url(${innerBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
              className="createAccount"
            >
              Create Account
            </div>

            <form className="form">
              <TextField
                variant="standard"
                label="Full Name"
                fullWidth
                size="normal"
                margin="dense"
                onChange={handleChange}
                name="userName"
                value={formData.userName}
              />
              <TextField
                variant="standard"
                label="Email Address"
                fullWidth
                size="normal"
                margin="dense"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
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
                onChange={handleChange}
                name="cPassword"
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
              <button onClick={handleSubmit} className="createAccountButton">
                Create Account
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
                Already Have An Account?
                <Link
                  style={{ textDecoration: "none", color: "#707070" }}
                  to="/login"
                >
                  {" "}
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

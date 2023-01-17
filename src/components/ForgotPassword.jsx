import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { api } from "../utils/axios";
import { toast } from "react-hot-toast";

function ForgotPassword() {
  const navigate = useNavigate();
  const image = "/images/background1.jpg";
  const innerBackground = "/images/innerBackground3.jpg";
  const logo = "/images/logo.png";

  const [formData, setFormData] = React.useState({
    email: "",
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

  const handleClick = () => {
    toast.success('OTP Sent!',
      {
        style: {
          borderRadius: '10px',
          background: '#031B34',
          color: '#fff',
        }
      });
    navigate("/enterOTP", { state: { id: 1, email: formData.email } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/sendOtp", {
        email: formData.email,
      })
      .then((response) => {
        console.log(response.data);
        handleClick();
      });
  };

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
            // borderRadius: "5px",
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
              className="forgotPassword"
            >
              Forgot Password
            </div>

            <form className="form">
              <TextField
                variant="standard"
                label="Email Address"
                fullWidth
                size="normal"
                margin="dense"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </form>
            <div style={{ margin: "2rem 0", textAlign: "center" }}>
              <button onClick={handleSubmit} className="createAccountButton">
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

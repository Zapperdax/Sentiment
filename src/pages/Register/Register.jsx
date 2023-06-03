import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, login } from "../../features/user/userSlice";
import FormContainer from "./FormContainer";
import { registerValidations } from "../../utils/validations/validations";
import { ROUTES } from "../../constants/navigation";
const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
     const res = await dispatch(
        createUser({
          name: values.fullName,
          email: values.email,
          password: values.password,
        })
      );
      const user = {
        email: res.payload.data.user.email,
        token: res.payload.data.token,
      };
      localStorage.setItem("user", JSON.stringify(user));
      await dispatch(login(user));
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error);
    }
    console.log(error)
  };

  return (
    <FormContainer
      loading={loading}
      type="register"
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={registerValidations}
    />
  );
};

export default Register;



 //   const res = await api.post("/newUser", {
    //     name: values.fullName,
    //     email: values.email,
    //     password: values.password,
    //   });
    //   const user = {
    //     email: res.data.user.email,
    //     token: res.data.token,
    //   };
    //   localStorage.setItem("user", JSON.stringify(user));
    //   await dispatch(login(user)).finally(() => {
    //     navigate("/");
    //   });
    // } catch (error) {
    //   console.log(error);
    //   if (error.response) {
    //     const { status } = error.response;
    //     if (status === 400) {
    //       alert("User already exists");
    //     } else if (status === 401 || status === 403) {
    //       alert("You are not authorized to perform this action. Please login or contact support for assistance.");
    //     } else {
    //       alert("An unexpected server error occurred. Please try again later.");
    //     }
    //   } else {
    //     alert("Network error occurred. Please check your internet connection.");
    //   }
    // }
{
  /* <div
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
  </div> */
}

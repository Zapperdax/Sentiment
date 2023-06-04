import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Formik, Form } from "formik";
import FormHeading from "../FormHeading/FormHeading";
import CustomTextField from "../CustomTextField/CustomTextField";
import FormButton from "../FormButton/FormButton";
import { ROUTES } from "../../../constants/navigation";
import { Link } from "react-router-dom";
import SentimentLogo from "../../SentimentLogo/SentimentLogo";

const FormComp = ({
  isLoading,
  type = "register",
  initialValues,
  validation,
  onSubmit,
}) => {
  const isSmall = useMediaQuery("(min-width: 767px)");
  const isTab = useMediaQuery("(max-width: 1200px)");
  const register = type === "register";
  const login = type === "login";
  const forgotPassword = type === "forgotPassword";
  const otp = type === "enterOtp";
  const resetPassword = type === "resetPassword";
  return (
    <Stack height="100vh" alignItems="center" justifyContent="center">
      {isTab && (
        <Box
          sx={{
            marginBottom: "50px",
            alignContent: "center",
          }}
        >
          <Link to={ROUTES.HOME}>
            <SentimentLogo type="form" />
          </Link>
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            Sentiment Analyst And Mood Companion
          </Typography>
        </Box>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        validateOnChange={false}
        validateOnBlur={true}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <Stack
            component="form"
            onSubmit={handleSubmit}
            sx={{
              gap: 1.2,
              width: !isSmall ? "345px" : "600px",
              position: "relative",
            }}
          >
            <FormHeading
              headerDescription={
                register
                  ? "Let's sign you up quickly."
                  : login
                  ? "Let's sign you in quickly."
                  : forgotPassword
                  ? "Enter email to receive OTP code"
                  : otp
                  ? "Enter OTP sent to your email"
                  : "Enter your new Password"
              }
            />
            {forgotPassword ? (
              <CustomTextField
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />
            ) : (
              <>
                {register && (
                  <CustomTextField
                    name="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                  />
                )}
                {!otp && !resetPassword && (
                  <CustomTextField
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                )}
                {otp && (
                  <CustomTextField
                    type="text"
                    name="otp"
                    label="OTP Code"
                    value={values.otp}
                    onChange={handleChange}
                    error={errors.otp}
                  />
                )}
                {!otp && (
                  <CustomTextField
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    error={errors.password}
                  />
                )}
                {(register || resetPassword) && (
                  <CustomTextField
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                  />
                )}
              </>
            )}
            {type === "login" && (
              <Link
                style={{
                  marginTop: "-22px",
                  textDecoration: "none",
                  fontWeight: "600",
                  color: "#fa3252",
                  alignSelf: "flex-end",
                  fontSize: "12px",
                }}
                to={ROUTES.FORGOT_PASSWORD}
              >
                Forgot Password?
              </Link>
            )}
            <FormButton
              isLoading={isLoading}
              type={type}
              questionText={
                register ? "Already have an account?" : "Don't have an account?"
              }
              linkText={register ? "Login" : "Register"}
              to={register ? ROUTES.LOGIN : ROUTES.REGISTER}
            />
          </Stack>
        )}
      </Formik>
    </Stack>
  );
};

export default FormComp;

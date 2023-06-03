import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Formik, Form } from "formik";
import FormHeading from "../FormHeading/FormHeading";
import CustomTextField from "../CustomTextField/CustomTextField";
import FormButton from "../FormButton/FormButton";
import { ROUTES } from "../../../constants/navigation";


const FormComp = ({
    isLoading,
  type = "register",
  initialValues,
  validation,
  onSubmit,
}) => {
  const isSmall = useMediaQuery("(min-width: 767px)");
  const register = type === "register";
  return (
    <Stack height="100vh" alignItems="center" justifyContent="center">
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
            sx={{ gap: 1.2, 
              width: !isSmall ? "345px" : "600px",

            }}
          >
            <FormHeading
              headerDescription={
                register
                  ? "Let's sign you up quickly."
                  : "Let's sign you in quickly."
              }
            />
            {register && (
              <CustomTextField
                name="fullName"
                label="Full Name"
                value={values.fullName}
                onChange={handleChange}
                error={errors.fullName}
              />
            )}
            <CustomTextField
              name="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            <CustomTextField
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
            {register && (
              <CustomTextField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
            )}
            <FormButton
            isLoading={isLoading}
              type={type}
              questionText={
                register ? "Already have an account?" : "Don't have an account?"
              }
              linkText={register ? "Login" : "Register"}
              to={register ? ROUTES.LOGIN : ROUTES.REGISTER  }
            />
          </Stack>
        )}
      </Formik>
    </Stack>
  );
};

export default FormComp;

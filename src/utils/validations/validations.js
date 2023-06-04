import { object, ref, string } from "yup";

const passwordValidations = (requiredMessage = "Password is required.") => {
  return string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required(requiredMessage);
};

const emailValidations = (requiredMessage = "Email is required.") => {
  return string().email("Email is invalid.").required(requiredMessage);
};

const nameValidations = (requiredMessage = "Name is required.") => {
  return string().required(requiredMessage);
};

export const forgotPasswordValidation = object().shape({
  email: emailValidations(),
});
export const enterOtpValidation = object().shape({
  otp: string().required("OTP is required."),
});
export const registerValidations = object().shape({
  fullName: nameValidations(),
  email: emailValidations(),
  password: passwordValidations(),
  confirmPassword: passwordValidations().oneOf(
    [ref("password")],
    "Password must match."
  ),
});
export const resetPasswordValidations = object().shape({
  password: passwordValidations(),
  confirmPassword: passwordValidations().oneOf(
    [ref("password")],
    "Password must match."
  ),
});

// export const postValidations =

export const loginValidations = object().shape({
  email: emailValidations(),
  password: string().required("Password is required."),
});

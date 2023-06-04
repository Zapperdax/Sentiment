import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { resetPasswordValidations } from "../../utils/validations/validations";
import { useDispatch, useSelector } from "react-redux";
import useToast from "../../hooks/useToast";
import { resetPassword } from "../../features/user/userSlice";
import { ROUTES } from "../../constants/navigation";
import FormContainer from "../AuthForm/FormContainer/FormContainer";

const initialValues = {
  password: "",
  confirmPassword: "",
};

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showToast = useToast();
  const { loading, error } = useSelector((state) => state.users);
  console.log(error);

  const handleSubmit = async (values) => {
    try {
      const res = await dispatch(
        resetPassword({
          email: location.state.email,
          password: values.password,
        })
      );
      if (res.payload.data) {
        showToast(
          "success",
          "Password Changed",
          "Password changed successfully."
        );
        setTimeout(() => {
          navigate(ROUTES.LOGIN);
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      showToast("error", "Failed", err.message);
      console.log(error);
      showToast("error", "Failed", error);
    }
  };

  return (
    <FormContainer
      loading={loading}
      type="resetPassword"
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={resetPasswordValidations}
    />
  );
}

export default Login;

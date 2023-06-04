import React from "react";
import { useNavigate } from "react-router-dom";
import { forgotPasswordValidation } from "../../utils/validations/validations";
import { useDispatch, useSelector } from "react-redux";
import { sendOTPMessage } from "../../features/user/userSlice";
import useToast from "../../hooks/useToast";
import { ROUTES } from "../../constants/navigation";
import FormContainer from "../AuthForm/FormContainer/FormContainer";

const initialValues = {
  email: "",
};

function ForgotPassword() {
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const showToast = useToast();

  const handleSubmit = async (values) => {
    try {
      console.log(values);
      const res = await dispatch(sendOTPMessage(values.email));
      console.log(res.payload);
      if (res.payload.status === 200) {
        showToast("success", "OTP Sent", "Check your email for OTP code.");
        setTimeout(() => {
          navigate(ROUTES.ENTER_OTP, { state: { id: 1, email: values.email } });
        }, 1000);
      } else {
        console.log(error);
        error && showToast("error", "OTP not Sent", error.error.message);
      }
    } catch (err) {
      console.log(err);
      showToast("error", "OTP not Sent", "Check your internet connection.");
    }
  };

  return (
    <FormContainer
      loading={loading}
      type="forgotPassword"
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={forgotPasswordValidation}
    />
  );
}

export default ForgotPassword;

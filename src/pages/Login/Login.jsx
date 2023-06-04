import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, userLogin } from "../../features/user/userSlice";
import { loginValidations } from "../../utils/validations/validations";
import useToast from "../../hooks/useToast";
import { FormContainer } from "../../components";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const showToast = useToast();

  const handleSubmit = async (values) => {
    try {
      const res = await dispatch(
        userLogin({ email: values.email, password: values.password })
      );
      const user = {
        token: res.payload.data.token,
        email: res.payload.data.user.email,
      };
      localStorage.setItem("user", JSON.stringify(user));
      await dispatch(login(user));
      showToast("success", "Welcome", "Have fun exploring!");
      navigate("/");
    } catch (err) {
      console.log(err);
      console.log(error);
      error && showToast("error", "Failed", error);
    }
  };

  return (
    <FormContainer
      loading={loading}
      type="login"
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={loginValidations}
    />
  );
};

export default Login;

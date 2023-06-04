import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { enterOtpValidation } from "../../utils/validations/validations";
import { verifyOTP } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import useToast from "../../hooks/useToast";
import { ROUTES } from "../../constants/navigation";
import FormContainer from "../AuthForm/FormContainer/FormContainer";

const initialValues = { otp: "" };
function EnterOTP() {
  const location = useLocation();
  const showToast = useToast();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const res = await dispatch(
        verifyOTP({ email: location.state.email, otp: values.otp })
      );
      if (res.payload.status == 200) {
        showToast("success", "OTP Verified", "OTP code has been verified.");
        setTimeout(() => {
          navigate(ROUTES.CHANGE_PASSWORD, {
            state: { id: 1, email: location.state.email },
          });
        }, 1000);
      } else {
        showToast("error", "OTP Verified", res.payload.data);
      }
    } catch (err) {
      showToast("error", "Invalid OTP", "Check your internet Connection.");
    }
  };

  return (
    <FormContainer
      loading={loading}
      type="enterOtp"
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={enterOtpValidation}
    />
  );
}

export default EnterOTP;

// api
//   .post("/getOtp", {
//     email: location.state.email,
//   })
//   .then((response) => {
//     console.log(response.data.otp);
//     if (response.data.otp !== values.otp) {

//       toast.error('Invalid OTP!',
//         {
//           style: {
//             borderRadius: '10px',
//             background: '#031B34',
//             color: '#fff',
//           }
//         });

//       return console.log("Not Matched");
//     }
//     toast.success('OTP Verified!',
//       {
//         style: {
//           borderRadius: '10px',
//           background: '#031B34',
//           color: '#fff',
//         }
//       });
//     navigate("/changePassword", {
//       state: { id: 1, email: location.state.email },
//     });
//   });

import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/navigation";

const FormButton = ({ to, type, questionText, linkText, isLoading }) => {
  const isSmall = useMediaQuery("(min-width: 767px)");
  const login = type === "login";
  const register = type === "register";
  const forgotPassword = type === "forgotPassword";
  const otp = type === "enterOtp";
  const resetPassword = type === "resetPassword";
  const styles = {
    container: {
      marginTop: "12px",
      display: "flex",
      justifyContent: isSmall ? "space-between" : "center",
      alignItems: isSmall ? "space-between" : "center",
      flexDirection: !isSmall ? "column" : "row",
      gap: "sm",
    },
    button: {
      width: "180px",
      background: "#39DCF3",
      color: "#272727",
      fontWeight: "800",
      textTransform: "capital",
      borderRadius: "0",
      fontFamily: "Manrope",
      fontSize: "1rem",

      "&:hover": {
        background: "#6EEB93",
      },
    },
    description: {
      color: "gray",
      fontFamily: "Manrope",
      fontWeight: "bold",
    },
    link: {
      color: "#39DCF3",
      textDecoration: "none",
      fontWeight: "600",
    },
  };

  return (
    <Box sx={styles.container}>
      <Button type="submit" size="large" sx={styles.button}>
        {!isLoading ? (
          forgotPassword ? (
            "Send OTP"
          ) : otp ? (
            "verify"
          ) : resetPassword ? (
            "Reset Password"
          ) : (
            type
          )
        ) : (
          <CircularProgress size={30} sx={{ color: "black" }} />
        )}
      </Button>
      {register || login ? (
        <Stack alignItems="flex-start">
          <Typography sx={styles.description}>{questionText}</Typography>
          <Link style={styles.link} to={to}>
            {linkText}
          </Link>
        </Stack>
      ) : null}
    </Box>
  );
};

export default FormButton;

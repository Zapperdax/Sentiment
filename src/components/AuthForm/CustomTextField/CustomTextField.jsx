import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import React from "react";

const CustomTextField = ({
  name,
  label,
  type = "text",
  value,
  onChange,
  error,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const password = type === "password";
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const styles = {
    inputField: {
      border: "1px solid #39DCF3",
      borderRadius: "0",
      outline: "none",
      margin: 0,
      fontFamily: "Manrope",
      input: {
        color: "white",
        fontSize: "1rem",
        fontWeight: "400",
        fontFamily: "Manrope",
      },
    },
    errorText: {
      fontSize: "12px",
      color: "#fa5252",
      letterSpacing: "0.3px",
      marginTop: "0.6px",
      padding: 0,
      fontFamily: "Manrope",
      visibility: error ? "visible" : "hidden",
    },
  };
  return (
    <Box>
      <TextField
        hiddenLabel
        name={name}
        fullWidth
        type={password && showPassword ? "text" : type}
        value={value}
        onChange={onChange}
        placeholder={label}
        sx={styles.inputField}
        InputProps={{
          endAdornment: password && (
            <IconButton onClick={handleClickShowPassword} sx={{color:'#39DCF3'}}>
              {showPassword ? (
                <VisibilityOff  />
              ) : (
                <Visibility  />
              )}
            </IconButton>
          ),
        }}
      />
      <Typography sx={styles.errorText}>{error ?? "a"}</Typography>
    </Box>
  );
};

export default CustomTextField;

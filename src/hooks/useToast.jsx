import { Box, Stack, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { toast } from "react-hot-toast";

const useToast = () => {
  const showToast = (type, title,message, ) => {
    // console.log(message)
    const success = type === "success";
    const styles = {
      container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        px: "10px",
        fontSize: "16px",
        color: "black",
      },
      toastType: {
        fontWeight: "800",
        fontSize: "18px",
        fontFamily: "Manrope",
        textTransform: "uppercase",
      },
      toastMessage: {
        fontSize: "14px",
        fontWeight: "600",
        fontFamily: "Manrope",
      },
    };
    toast(
      <Box sx={styles.container}>
        <Stack>
          <Typography sx={styles.toastType}>{title}</Typography>
          <Typography sx={styles.toastMessage}>{message}</Typography>
        </Stack>
        <NotificationsNoneOutlinedIcon size="large" />
      </Box>,
      {
        duration: 4000,
        position: "top-right",
        style: {
          borderRadius: "0px",
          width: "344px",
          height: "60px",
          background: success ? "#6EEB83" : "#FF5E5B",
          padding: 0,
          alignItems: "flex-start",
        },
      }
    );
  };

  return showToast;
};

export default useToast;

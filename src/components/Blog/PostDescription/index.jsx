import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/navigation";

const PostDescription = ({
  description,
  postId = "",
  details = false,
  quote = false,
}) => {
  const [showFull, setShowFull] = useState(false);

  const styles = {
    fontWeight: "400",
    fontSize: { sm: "14px", md: "18px" },
    lineHeight: { sm: "20px", md: "27px" },
    // width: "886px",
    whiteSpace: "pre-line",
    fontFamily: "Manrope",
  };
  if (quote === true) {
    styles.fontSize = { sm: "12px", md: "16px" };
    styles.lineHeight = { sm: "16px", md: "22px" };
  }

  const truncatedDescription =
    !details && description?.length > 500
      ? description.substring(0, 500) + "..."
      : description;

  const handleClick = (event) => {
    event.preventDefault();
    setShowFull(!showFull);
  };

  return (
    <Typography sx={styles}>
      {truncatedDescription}
      {!details && description?.length > 444 && (
        <Link
          to={`${ROUTES.BLOG_POST.replace(":id", postId)}`}
          style={{ color: "#39DCF3" }}
          color="inherit"
        >
          {showFull ? "Read less" : "Read more"}
        </Link>
      )}
    </Typography>
  );
};

export default PostDescription;

import { Box } from "@mui/material";
import React from "react";

const PostFormDescriptionField = ({ isSmall, value, onChange, name }) => {
  return (
    <Box>
      <textarea
        value={value}
        onChange={onChange}
        name={name}
        placeholder="Write your post here..."
        style={{
          width: !isSmall ? "483px" : "383px",
          minHeight: "10rem",
          backgroundColor: "#040C18",
          color: "#fff",
          border: "1px solid #39DCF3",
          borderRadius: 0,
          padding: "8px",
          fontFamily: "Manrope",
          fontSize: "1rem",
          resize: "vertical",
          outline: "none",
        }}
      />
    </Box>
  );
};

export default PostFormDescriptionField;

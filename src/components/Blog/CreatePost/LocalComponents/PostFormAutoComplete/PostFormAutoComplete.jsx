import { Autocomplete, Box, TextField } from "@mui/material";
import React from "react";

const PostFormAutoComplete = ({ data, value, name, setFieldValue }) => {
  return (
    <Box>
      <Autocomplete
        multiple
        name={name}
        id="tags-standard"
        value={value}
        onChange={(event, newValue) => {
          setFieldValue("tags", newValue);
        }}
        options={data}
        getOptionLabel={(option) => option.name}
        sx={{
          border: "1px solid #39DCF3",
          "& .MuiAutocomplete-tag": {
            backgroundColor: "#39DCF3",
            color: "black",
            margin: "2px",
            fontWeight: "bold",
            fontFamily: "Manrope",
          },
          "& .MuiAutocomplete-endAdornment": {
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          },
          "& .MuiAutocomplete-clearIndicator": {
            color: "white",
          },
          "& .MuiAutocomplete-listbox": {
            backgroundColor: "red",
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              color: "white",
              input: {
                color: "white",
                fontSize: "1rem",
                fontWeight: "400",
                fontFamily: "Manrope",
                placeholder: {
                  color: "white",
                },
              },
            }}
            placeholder="Select Tags"
          />
        )}
      />
    </Box>
  );
};

export default PostFormAutoComplete;

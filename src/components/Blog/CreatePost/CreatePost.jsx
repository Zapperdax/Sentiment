import {
  Autocomplete,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import CustomTextField from "../../AuthForm/CustomTextField/CustomTextField";
import AddPostButton from "./LocalComponents/AddPostButton";
import PostFormHeader from "./LocalComponents/PostFormHeader/PostFormHeader";
import PostFormDescriptionField from "./LocalComponents/PostFormDescriptionField/PostPostDescriptionField";
import PostFormAutoComplete from "./LocalComponents/PostFormAutoComplete/PostFormAutoComplete";
import { Formik } from "formik";

const initialValues = {
  title: "",
  description: "",
  tags: [],
};

const CreatePost = ({ open, onClose }) => {
  const isSmall = useMediaQuery("(max-width: 800px)");
  const emotions = [
    { name: "Happy" },
    { name: "Sad" },
    { name: "Angry" },
    { name: "Excited" },
    { name: "Surprised" },
  ];

  return (
    <Dialog open={open} sx={{ borderRadius: 0 }}>
      <DialogTitle
        sx={{
          backgroundColor: "#040C18",
          display: "flex",
          color: "#39DCF3",
          alignContent: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #39DCF3",
          px: 1,
        }}
      >
        <CloseIcon fontSize="large" onClick={onClose} />
        <PostFormHeader />
      </DialogTitle>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={false}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, values, handleChange, setFieldValue, errors }) => (
          <Stack
            component="form"
            onSubmit={handleSubmit}
            sx={{
              height: "85vh",
              width: !isSmall ? "500px" : "400px",
              backgroundColor: "#040C18",
              p: 2,
              gap: isSmall ? 3 : 1,
              //   justifyContent: "center",
              alignContent: "center",
              //   alignItems: "center",
            }}
          >
            <CustomTextField
              label="Title"
              value={values.title}
              name="title"
              onChange={handleChange}
            />
            <PostFormDescriptionField
              value={values.description}
              name="description"
              onChange={handleChange}
              isSmall={isSmall}
            />
            <PostFormAutoComplete
              value={values.tags}
              name="tags"
              data={emotions}
              setFieldValue={setFieldValue}
            />

            <AddPostButton text="Add Post" isLoading={false} />
          </Stack>
        )}
      </Formik>
    </Dialog>
  );
};

export default CreatePost;

{
  /* <PostFormAutoComplete
              value={values.tags}
              name="tags"
              data={emotions}
              onChange={handleChange}
            /> */
}

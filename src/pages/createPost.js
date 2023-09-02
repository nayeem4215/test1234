import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useFormik } from "formik";
import Editor from "../components/editor/Editor";
import { useAddPostMutation } from "../redux/apis/post";
import { useUploadImagesMutation } from "../redux/apis/upload";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function CreatePost() {
  let { user } = useAuth();
  let [addPost, { error, isLoading }] = useAddPostMutation();
  let [uploadImage, { error: err, isLoading: uploading }] =
    useUploadImagesMutation();
  let navigateTo = useNavigate();
  let [description, setDescription] = useState("");
  const initialValues = {
    title: "",
    image: null,
    shortDesc: "",
  };

  const onSubmit = async (values) => {
    // You can implement the logic to submit the post item here
    let images = new FormData();
    images.append("path", "nayeem/bikeportals");
    images.append("image", values.image);
    let body = { ...values };
    body.user = user._id;
    body.description = description;
    try {
      let res;
      res = await uploadImage(images).unwrap();
      body.image = res.image.url;
      await addPost(body).unwrap();
      navigateTo("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const handleFileChange = (event) => {
    formik.setFieldValue("image", event.currentTarget.files[0]);
  };

  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h5" align="center" gutterBottom>
        Create Your Post
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }} align="center" gutterBottom>
        Your post should be about related to bikes
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="title"
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("title")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="shortdesc"
              name="shortdesc"
              label="Short Description"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("shortDesc")}
            />
          </Grid>
          <Grid item xs={12}>
            <Editor value={description} setValue={setDescription} />
          </Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              id="photo"
              name="photo"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <label htmlFor="photo">
              <StyledButton variant="outlined" component="span">
                Upload Photo
              </StyledButton>
            </label>
            <Box>
              {formik.values.image && (
                <img
                  width={"100%"}
                  src={URL.createObjectURL(formik.values.image)}
                  alt="image"
                  style={{ marginTop: 10 }}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Post Item
            </StyledButton>
            {isLoading || (uploading && <Typography>Loading...</Typography>)}
          </Grid>
        </Grid>
      </form>
    </StyledContainer>
  );
}

export default CreatePost;

import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useFormik } from "formik";
import { useUploadImagesMutation } from "../redux/apis/upload";
import { useUpdateProfileMutation } from "../redux/apis/user";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function UpdateProfilePage() {
  let navigateTo = useNavigate();
  let { user } = useAuth();
  let [uploadImage, { error, isLoading }] = useUploadImagesMutation();
  let [updateProfile, { error: err, isLoading: isLoad }] =
    useUpdateProfileMutation();
  const initialValues = {
    name: user.name,
    email: user.email,
  };

  const [img, setImg] = useState(null);

  const onSubmit = async (values) => {
    let images = new FormData();
    images.append("path", "nayeem/bikeportals");
    images.append("photo", img);

    try {
      let res;
      if (img) res = await uploadImage(images).unwrap();

      let body = {};
      if (values.name) {
        body.name = values.name;
      }
      if (values.email) {
        body.email = values.email;
      }
      if (img) body.photo = res.photo.url;

      await updateProfile(body).unwrap();
      navigateTo("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <StyledContainer maxWidth="sm">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <StyledAvatar
            alt="User Avatar"
            src={img ? URL.createObjectURL(img) : user.photo}
          />
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
              <label htmlFor="avatar">
                <IconButton color="primary" component="span">
                  Change Avatar
                </IconButton>
              </label>
              <input
                onChange={(e) => {
                  setImg(e.currentTarget.files[0]);
                }}
                type="file"
                id="avatar"
              ></input>

              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <StyledButton
                type="submit"
                variant="outlined"
                color="primary"
                fullWidth
              >
                Update Profile
              </StyledButton>
            </Box>
          </form>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

export default UpdateProfilePage;

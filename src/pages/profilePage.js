import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import PostCard from "../components/postCard/postCard";
import { useGetProfileQuery } from "../redux/apis/user";
import { useGetPostsQuery } from "../redux/apis/post";
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

function ProfilePage() {
  let { user } = useAuth();
  let { data, error, isLoading } = useGetProfileQuery();
  let { data: posts } = useGetPostsQuery("user=" + user._id);
  return (
    <StyledContainer maxWidth="100%" sx={{ minHeight: "90vh" }}>
      <Box sx={{ m: "auto" }} width={400}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <StyledAvatar alt="User Avatar" src={data?.photo} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              {data?.name}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              {data?.email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link to={"update"}>
              <StyledButton variant="outlined" color="primary" fullWidth>
                Edit Profile
              </StyledButton>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "80%", margin: "auto" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              width: "80%",
              margin: "auto",
              alignItems: "center",
              justifyContent: "space-between",
              my: 2,
            }}
          >
            <Typography fontSize={28}>Total Posts</Typography>
            <Link to={"/createPost"}>
              <Button sx={{ mt: 2 }} variant="contained">
                Add a Post
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {posts?.data.length === 0 && (
              <Typography textAlign={"center"}>No Posts has created</Typography>
            )}
            {posts?.data.map((p, i) => {
              return <PostCard post={p} key={i} />;
            })}
          </Box>
        </Box>
      </Box>
    </StyledContainer>
  );
}

export default ProfilePage;

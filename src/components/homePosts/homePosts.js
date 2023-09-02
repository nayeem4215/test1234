import React from "react";
import { useGetPostsQuery } from "../../redux/apis/post";
import { Box, Button, Typography } from "@mui/material";
import PostCard from "../postCard/postCard";
import { Link } from "react-router-dom";

export default function HomePosts() {
  let { data } = useGetPostsQuery("page=1&limit=3");
  console.log(data);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography fontSize={42} sx={{ mb: 3 }}>
        What's going on the portals?
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {data?.data.map((c, i) => {
          return <PostCard key={i} post={c} />;
        })}
      </Box>
      <Link to={"/posts"}>
        <Button variant="outlined" sx={{ mt: 2 }} size="lg">
          See all
        </Button>
      </Link>
    </Box>
  );
}

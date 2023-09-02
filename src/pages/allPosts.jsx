import React from "react";
import { useGetPostsQuery } from "../redux/apis/post";
import { Box, Button, Typography } from "@mui/material";
import PostCard from "../components/postCard/postCard";
import { Link } from "react-router-dom";

export default function AllPosts() {
  let { data } = useGetPostsQuery("page=1&limit=100");
  return (
    <Box sx={{ width: "86%", margin: "auto" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography fontSize={42} sx={{ my: 5 }}>
          What's peoples are posting !
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
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
    </Box>
  );
}

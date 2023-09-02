import { Box, Typography } from "@mui/material";
import React from "react";
import Comment from "../components/comment/comment";
import { useGetPostQuery } from "../redux/apis/post";
import { useParams } from "react-router-dom";

export default function PostDetailsPage() {
  let { id } = useParams();
  let { data } = useGetPostQuery(id);
  console.log(data);
  return (
    <Box sx={{ p: 10, margin: "auto" }}>
      <Box sx={{ width: "60%", margin: "auto" }}>
        <img width={"100%"} src={data?.data?.image} alt="dlfdj" />
      </Box>
      <Box sx={{ width: "50%", margin: "auto", my: 5 }}>
        <Typography fontSize={14}>{data?.data?.createdAt}</Typography>
        <Typography fontSize={42} component={"h1"}>
          {data?.data?.title}
        </Typography>
        <div
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        ></div>

        <Box sx={{ mt: 2 }}>
          <Comment />
        </Box>
      </Box>
    </Box>
  );
}

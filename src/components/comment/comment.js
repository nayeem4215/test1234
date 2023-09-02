import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useAuth } from "../../hooks/useAuth";
import {
  useAddCommentMutation,
  useGetCommentsByPostQuery,
} from "../../redux/apis/comment";
import { useParams } from "react-router-dom";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
}));

const Comment = () => {
  let { id } = useParams();
  let { data } = useGetCommentsByPostQuery(id);
  const [addComment] = useAddCommentMutation();
  console.log(data);
  let { user } = useAuth();
  const [commentText, setCommentText] = useState("");
  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const newComment = {
      text: commentText,
      date: new Date().toLocaleString(),
    };
    let comment = {};
    comment.user = user._id;
    comment.post = id;
    comment.commentData = commentText;
    try {
      await addComment(comment);
      setCommentText("");
    } catch (error) {}
  };

  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h5" align="center" gutterBottom>
        Comments
      </Typography>
      <form onSubmit={handleCommentSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="commentText"
              name="commentText"
              label="Add a comment"
              variant="outlined"
              fullWidth
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Comment
            </Button>
          </Grid>
        </Grid>
      </form>
      <List>
        {data?.comments.map((comment, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar src={user.photo}></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={comment.commentData}
              secondary={comment.createdAt}
            />
          </ListItem>
        ))}
      </List>
    </StyledContainer>
  );
};

export default Comment;

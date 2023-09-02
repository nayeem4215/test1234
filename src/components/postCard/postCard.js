import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { useGetProfileQuery } from "../../redux/apis/user";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard({ post }) {
  let { data } = useGetProfileQuery();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            src={data?.photo}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post?.title}
        subheader={post?.createdAt}
      />
      <CardMedia
        component="img"
        height="194"
        image={
          post?.image
            ? post?.image
            : "https://bd.gaadicdn.com/upload/modellogo/649bc0cf4b3f0.jpg"
        }
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post?.shortDesc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link
          style={{ textDecoration: "none", font: "inherit" }}
          to={"/posts/" + post?._id}
        >
          <Button>Read</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const UsersCard = ({ user }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`, { state: user });
  };
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          width="80"
          height="80"
          image={user.avatar_url}
          alt="Avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.repos_url}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handleClick(user.id)}
        >
          View More Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default UsersCard;

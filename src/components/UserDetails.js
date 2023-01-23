import * as React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Repos from "./Repos";

const UserDetails = () => {
  const { userdetailbyID } = useParams();

  const users = useSelector((state) => state.userReducer);

  const location = useLocation();
  const user = location.state;
  console.log(user);

  return (
    <Container
      maxWidth="100vw"
      style={{
        display: "flex",
        gap: 50,
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <Card sx={{ maxWidth: 300, maxHeight: 450, mt: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={user.avatar_url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.login}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Repos repos_url={user.repos_url} />
    </Container>
  );
};

export default UserDetails;

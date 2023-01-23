import React from "react";
import { Grid } from "@mui/material";
import UCard from "./components/Card";
import { useSelector } from "react-redux";

const UsersCard = ({ users }) => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {users.map((user) => (
        <Grid item xs={4}>
          <UCard key={user.id} user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersCard;

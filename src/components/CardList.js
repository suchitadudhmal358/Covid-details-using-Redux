import React from "react";
import { Grid } from "@mui/material";
import Card from "./components";

const CardList = ({ users }) => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      {users.map((user) => (
        <Grid item xs={4}>
          <Card key={user.id} user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;

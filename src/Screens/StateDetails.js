import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StateDetails = () => {
  const { statecode } = useParams;
  console.log(statecode);
  const stateData = useSelector((state) => state.covidReducer);
  const stateWise = stateData.statewise;
  return (
    <Box
      sx={{
        minWidth: 200,
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "100px",
        height: 300,
      }}
    >
      <Card variant="outlined">
        <React.Fragment>
          <CardContent sx={{ height: 250 }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Covid Details
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ mb: 1.5 }}
              color="success.dark"
            >
              Hello
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              Active :
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              Confirmed :
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              Deaths :
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              Recovered :
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default StateDetails;

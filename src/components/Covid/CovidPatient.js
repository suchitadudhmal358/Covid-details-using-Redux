import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CovidPatient = ({ state }) => {
  const navigate = useNavigate();
  const handleClick = (statecode) => {
    navigate(`/coviddata/${statecode}`);
  };
  return (
    <Box
      sx={{
        minWidth: 200,
        marginLeft: "10px",
        marginRight: "10px",
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
              {state.state}
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              Active : {state.active}
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              Confirmed : {state.confirmed}
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              Deaths : {state.deaths}
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              Recovered : {state.recovered}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleClick(state.statecode)}>
              Learn More
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default CovidPatient;

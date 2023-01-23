import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { indigo } from "@mui/material/colors";

const Repos = ({ repos_url }) => {
  console.log(repos_url);
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await axios.get(repos_url);
    setRepos(data);
    console.log(data);
  };
  useEffect(() => {
    fetchRepos();
  }, []);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          textTransform: "uppercase",
          borderBottom: "1px solid #808080",
          fontStyle: "italic",
        }}
      >
        Repositories
      </h1>
      {repos.map((repo) => (
        <ListItem
          alignItems="flex-start"
          divider
          key={repo.id}
          sx={{ flexDirection: "column" }}
        >
          <ListItemText style={{ color: "#1769aa" }}>
            Repo Name : {repo.name}
          </ListItemText>
          <ListItemText style={{ color: "#424242" }}>
            Language : {repo.language}
          </ListItemText>
          {/* <ListItemText style={{ color: "#5c6bc0" }}>
            Visibility : {repo.visibility}
          </ListItemText> */}
        </ListItem>
      ))}
    </List>
  );
};

export default Repos;

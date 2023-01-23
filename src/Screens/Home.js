import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserCard from "../components/Card";
import FetchUserService from "../services/FetchUserService";
import Pagination from "@mui/material/Pagination";
import { Grid } from "@mui/material";
import { DISPLAY_USERS } from "../action/action.types";

const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState("1");
  const [users, setUsers] = useState([]);
  const [getUser, SetGetUser] = useState([]);
  const element = "hello";

  const pageSize = 6;

  useEffect(() => {
    const usersData = async () => {
      const data = await FetchUserService();
      setUsers(data);
      dispatch({ type: "DISPLAY_USERS", payload: data });
      // if (users.length === 0) {
      //   setUsers(data);
      //   dispatch({ type: "DISPLAY_USERS", payload: data });
      // }
    };

    usersData();
  }, []);

  useEffect(() => {
    paginate(page);
  }, [users, page]);

  const paginate = (pageNum) => {
    const PageData = users.slice((pageNum - 1) * pageSize, pageNum * pageSize);
    setPage(pageNum);
    SetGetUser(PageData);
  };
  return (
    <div className="App">
      <Grid
        container
        spacing={4}
        sx={{ px: 20 }}
        style={{
          display: "flex",
          // justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          marginTop: "100px",
        }}
      >
        {getUser.map((user) => (
          <Grid key={user.id} item xs={3} sx={{ maxWidth: "80%" }}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={5}
        variant="outlined"
        shape="rounded"
        // page={page}
        style={{
          position: "fixed",
          bottom: "0",
          zIndex: "1",
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
          padding: "10px",
          justifyContent: "center",
        }}
        onChange={(event, number) => paginate(number)}
      />
    </div>
  );
};

export default Home;

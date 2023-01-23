import React from "react";
import axios from "axios";

const FetchUserService = () => {
  return axios
    .get("https://api.github.com/users")
    .then((res) => res.data)
    .catch((err) => console.log(err));
  //   const [fdata, setFdata] = useState([]);
  //   const fetchData = async () => {
  //     try {
  //       const getUser = await axios
  //         .get("https://api.github.com/users")
  //         .then((res) => res.data);
  //       console.log(getUser);
  //       return getUser;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   const userData = fetchData();
  //   //   console.log(fdata);
  //   return userData.then((data) => console.log(data));
};

export default FetchUserService;

import axios from "axios";

export const getUsers = () => axios({
  method: "GET",
  url: "https://reqres.in/api/users?page=2",
});

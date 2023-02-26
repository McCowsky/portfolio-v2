import axios from "axios";

export const getProjects = async () => {
  const res = await axios.get<{ [key: string]: unknown }[]>(
    "https://api.github.com/users/McCowsky/repos"
  );
  return res.data;
};

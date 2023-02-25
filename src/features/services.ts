import axios from "axios";

export const getProjects = async () => {
  const res = await axios.get<{ [key: string]: any }[]>(
    "https://api.github.com/users/McCowsky/repos"
  );
  return res.data;
};

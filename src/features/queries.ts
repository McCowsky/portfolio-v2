import { useQuery } from "react-query";
import { getProjects } from "./services";
import { AxiosError } from "axios";

export const useGetProjects = () => {
  return useQuery<{ [key: string]: any }[], AxiosError>("projects", () => getProjects());
};

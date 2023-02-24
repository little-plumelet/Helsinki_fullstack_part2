import axios from "axios";
import { BASE_URL } from "../constants";

export const getAllPersons = () => {
  const response = axios.get(BASE_URL);
  return response
    .then(response => response.data)
    .catch((err) =>
      alert(`Error occured during fetching phonebook. Error: ${err}`)
    );
};

import axios from "axios";
import { BASE_URL } from "../constants";

export const addPersonToPhoneBook = (person) => {
  const response = axios.post(BASE_URL, person);
  return response
    .then((response) => response.data)
    .catch((err) =>
      alert(`Error occured during adding a person in phonebook. Error: ${err}`)
    );
};

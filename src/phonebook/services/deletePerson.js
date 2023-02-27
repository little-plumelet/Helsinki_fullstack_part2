import axios from "axios";
import { BASE_URL } from "../constants";

export const deletePerson = (person) => {
  const response = axios.delete(`${BASE_URL}/${person.id}`);
  return response
    .then(() => person.id)
    .catch((err) =>
      alert(`Error ocured during deleting ${person.name}. Error: ${err}!`)
    );
};

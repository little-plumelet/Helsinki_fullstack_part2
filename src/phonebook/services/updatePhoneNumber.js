import axios from "axios"
import { BASE_URL } from "../constants"

export const updatePhoneNumber = (person) => {
  const response = axios.put(`${BASE_URL}/${person.id}`, person);
  return response
    .then(res => res.data)
    .catch(err => alert(`Error occured during updating ${person.name}. Error: ${err}!`))
}
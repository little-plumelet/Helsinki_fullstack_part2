import { Button } from "./Button";

export const PhonebookList = ({ filteredPersons, handleDeleteClick }) => {
  return (
    <>
      <h2>Numbers</h2>
      <table>
        <thead></thead>
        <tbody>
          {filteredPersons.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td> {person.phone}</td>
              <td>
                {" "}
                <Button
                  title="delete"
                  handleClick={() => {
                    handleDeleteClick(person.id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

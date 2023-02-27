import { Button } from "./Button";

export const PhonebookList = ({filteredPersons, handleDeleteClick}) => {
  return (
    <>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <div key={person.id}>
          {person.name} {person.phone}
          <Button title='delete' handleClick={() => {handleDeleteClick(person.id)}}/>
        </div>
      ))}
    </>
  );
};

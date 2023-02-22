export const PhonebookList = ({filteredPersons}) => {
  return (
    <>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <div key={person.name}>
          {person.name} {person.phone}
        </div>
      ))}
    </>
  );
};

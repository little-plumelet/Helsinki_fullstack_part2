import { useState } from 'react';

export const PhonebookPage = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addNameHandler = (event) => {
    setNewName(event.target.value);
  };

  const submitNameHandler = (event) => {
    event.preventDefault();
    if (persons.find(person => person.name === newName))
    {
      alert(`${newName} is already in the phonebook!`);
      return;
    }
    setPersons([...persons, {name: newName}]);
    setNewName('');
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={addNameHandler} />
        </div>
        <div>
          <button type="submit" onClick={submitNameHandler}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name}</div>)}
    </div>
  );
};

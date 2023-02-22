import { useState } from 'react';

export const PhonebookPage = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", phone: '+8-888-777-66-55' }]);
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const changeNameHandler = (event) => {
    setNewName(event.target.value);
  };

  const changePhoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const submitNameHandler = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already in the phonebook!`);
      return;
    }
    if (!newName || !phoneNumber) {
      alert('You must fill all fields!');
      return;
    }
    if (!phoneNumber.match(/\+[0-9]{1,3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/g)) {
      alert('You phone mast be like +995-888-77-66!');
      return;
    }
    setPersons([...persons, { name: newName, phone: phoneNumber }]);
    setNewName('');
    setPhoneNumber('');
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={changeNameHandler}/>
        </div>
        <div>
          number:{" "}
          <input
            value={phoneNumber}
            onChange={changePhoneNumberHandler}
            placeholder="+995-587-555-44-22"
          />
        </div>
        <div>
          <button type="submit" onClick={submitNameHandler}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name} {person.phone}</div>
      ))}
    </div>
  );
};

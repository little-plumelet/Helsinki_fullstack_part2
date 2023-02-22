import { useState } from "react";

export const PhonebookPage = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]);
  const [filteredPersons, setFilteredPersons] = useState([...persons]);
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [filterName, setFilterName] = useState('');

  const changeFilterNameHandler = (event) => {
    const filter = event.target.value;
    setFilterName(filter);
    if (filter === '') {
      setFilteredPersons([...persons])
    } else {
      setFilteredPersons(persons.reduce((acc, person) => {
        if (person.name.toLowerCase().includes(filter.toLowerCase())) {
          acc.push(person);
        };
        return acc;
      }, []))
    }
  }

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
      alert("You must fill all fields!");
      return;
    }
    if (!phoneNumber.match(/\+[0-9]{1,3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/g)) {
      alert("You phone mast be like +995-888-77-66!");
      return;
    }
    setPersons([...persons, { name: newName, phone: phoneNumber }]);
    setNewName("");
    setPhoneNumber("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filterName} onChange={changeFilterNameHandler} />
      </div>
      <form>
        <div>
          name: <input value={newName} onChange={changeNameHandler} />
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
      {filteredPersons.map((person) => (
        <div key={person.name}>
          {person.name} {person.phone}
        </div>
      ))}
    </div>
  );
};

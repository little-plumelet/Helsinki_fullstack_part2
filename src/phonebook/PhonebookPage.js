import { useEffect, useState } from "react";
import { AddNameForm } from "./AddNameForm";
import { FilterByName } from "./FilterByName";
import { PhonebookList } from "./PhonebookList";
import { addPersonToPhoneBook } from "./services/addPersonToPhonebook";
import { deletePerson } from "./services/deletePerson";
import { getAllPersons } from "./services/getAllPersons";

export const PhonebookPage = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getAllPersons().then((data) => {
      setPersons(data);
      setFilteredPersons(data);
    });
  }, []);

  const changeFilterNameHandler = (event) => {
    const filter = event.target.value;
    setFilterName(filter);
    if (filter === "") {
      setFilteredPersons([...persons]);
    } else {
      setFilteredPersons(
        persons.reduce((acc, person) => {
          if (person.name.toLowerCase().includes(filter.toLowerCase())) {
            acc.push(person);
          }
          return acc;
        }, [])
      );
    }
  };

  const handleDeleteClick = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      deletePerson(personToDelete).then((id) => {
        const clearedPresons = persons.filter((person) => person.id !== id);
        setPersons([...clearedPresons]);
        setFilteredPersons([...clearedPresons]);
      });
    }
  };

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
    addPersonToPhoneBook({ name: newName, phone: phoneNumber }).then(
      (addedPerson) => {
        setPersons([...persons, { ...addedPerson }]);
        setFilteredPersons([...persons, { ...addedPerson }]);
        setNewName("");
        setPhoneNumber("");
      }
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterByName
        filterName={filterName}
        changeFilterNameHandler={changeFilterNameHandler}
      />
      <AddNameForm
        newName={newName}
        changeNameHandler={changeNameHandler}
        phoneNumber={phoneNumber}
        changePhoneNumberHandler={changePhoneNumberHandler}
        submitNameHandler={submitNameHandler}
      />
      <PhonebookList
        filteredPersons={filteredPersons}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

import { useEffect, useState } from "react";
import { AddNameForm } from "./AddNameForm";
import { ErrorMessage } from "./commonComponents/ErrorMessage/ErrorMessage";
import { SuccessMessage } from "./commonComponents/SuccessMessage/SuccessMessage";
import { FilterByName } from "./FilterByName";
import { PhonebookList } from "./PhonebookList";
import { addPersonToPhoneBook } from "./services/addPersonToPhonebook";
import { deletePerson } from "./services/deletePerson";
import { getAllPersons } from "./services/getAllPersons";
import { updatePhoneNumber } from "./services/updatePhoneNumber";

export const PhonebookPage = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    const existedPerson = persons.find((person) => person.name === newName);
    if (!newName || !phoneNumber) {
      alert("You must fill all fields!");
      return;
    }
    if (!phoneNumber.match(/\+[0-9]{1,3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/g)) {
      alert("You phone mast be like +995-888-77-66!");
      return;
    }
    if (
      existedPerson &&
      window.confirm(
        `${newName} is already added to phonebook, replace the old number with the new one?`
      )
    ) {
      updatePhoneNumber({
        name: newName,
        phone: phoneNumber,
        id: existedPerson.id,
      })
      .then((addedPerson) => {
        const updatedPersons = persons.map((person) => {
          if (person.id === addedPerson.id) {
            return {
              ...person,
              phone: addedPerson.phone,
            };
          } else return { ...person };
        });
        setPersons([...updatedPersons]);
        setFilteredPersons([...updatedPersons]);
        setNewName("");
        setPhoneNumber("");
      })
      .catch(error => {
        setErrorMessage(`Cannot update ${newName}. Error: ${error}`);
        setTimeout(() => {
          setErrorMessage('')
        }, 3000)
      })
      return;
    }

    addPersonToPhoneBook({ name: newName, phone: phoneNumber })
      .then((addedPerson) => {
        setPersons([...persons, { ...addedPerson }]);
        setFilteredPersons([...persons, { ...addedPerson }]);
        setNewName("");
        setPhoneNumber("");
        setSuccessMessage(`${addedPerson.name} was added to phonebook`);
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((error) => {
        setErrorMessage(`Cannot add ${newName} to phonebook. Error: ${error}`);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      });
  };

  return (
    <div>
      {!!successMessage && <SuccessMessage message={successMessage} />}
      {!!errorMessage && <ErrorMessage message={errorMessage} />}
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

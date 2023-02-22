export const AddNameForm = ({
  newName,
  changeNameHandler,
  phoneNumber,
  changePhoneNumberHandler,
  submitNameHandler
}) => {
  return (
    <>
     <h2>Add name</h2>
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
    </>
  )
}
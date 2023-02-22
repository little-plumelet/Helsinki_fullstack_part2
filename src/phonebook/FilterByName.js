export const FilterByName = ({filterName, changeFilterNameHandler}) => {
  return (
    <>
      filter shown with:{" "}
      <input value={filterName} onChange={changeFilterNameHandler} />
    </>
  );
};

import { Button } from "./parts/Button";

export const CountriesList = ({ countriesList, handleClick }) => {
  return (
    <table>
      <thead></thead>
      <tbody>
        {countriesList?.map((country) => (
          <tr key={country.cioc}>
            <td>{country.name.official}</td>
            <td>
              <Button title="show" handleClick={() => handleClick(country)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

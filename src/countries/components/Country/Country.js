import styles from './style.module.css';

export const Country = ({
  name,
  capital,
  area,
  languages,
  flag
}) => {
  return (
    <>
      <h2>{name}</h2>
      <div>{'capital - '}{capital}</div>
      <div>{'area - '}{area}</div>
      <div>
        <h3>languages:</h3>
        <ul>
          {Object.entries(languages).map(([key, language]) => <li key={key}>{language}</li>)}
        </ul>
        <div className={styles.flag}>{flag}</div>
      </div>
    </>
  )
}
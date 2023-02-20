import { Button } from "./Button";
import { Header } from "./Header";

export const DayAnecdoteBlock = ({
  anecdotes,
  votes,
  selected,
  handleClickNext,
  handleClickVote,
}) => {
  return (
    <section>
      <Header title="Anecdote of the day" />
      <div>{anecdotes[selected]}</div>
      <div>has votes: {votes[selected]}</div>
      <Button title="vote" handleClick={handleClickVote} />
      <Button title="next anecdote" handleClick={handleClickNext} />
    </section>
  );
};

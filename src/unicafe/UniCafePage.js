import { useState } from "react";
import { Button } from "./Button";
import { Header } from "./Header";
import { Statistics } from "./Statistics";

export const UniCafePage = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodTitle = "good";
  const neutralTitle = "neutral";
  const badTitle = "bad";

  return (
    <section>
      <Header title={"Give feedback"} />
      <Button
        title={goodTitle}
        handleClick={() => setGood((prevState) => prevState + 1)}
      />
      <Button
        title={neutralTitle}
        handleClick={() => setNeutral((prevState) => prevState + 1)}
      />
      <Button
        title={badTitle}
        handleClick={() => setBad((prevState) => prevState + 1)}
      />
      {(!!good || !!bad || !!neutral) && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          goodTitle={goodTitle}
          neutralTitle={neutralTitle}
          badTitle={badTitle}
        />
      )}
      {!good && !bad && !neutral && <p>{"No feedback given"}</p>}
    </section>
  );
};

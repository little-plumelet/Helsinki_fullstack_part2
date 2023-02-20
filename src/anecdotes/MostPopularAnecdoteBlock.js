import { Header } from "./Header"

export const MostPopularAnecdoteBlock = ({votes, anecdotes}) => {

  const maxVote = Math.max(...votes)
  const mostPopularAnecdote = anecdotes[votes.indexOf(maxVote)];

  return (
    <section>
        <Header title='Anecdote with most votes' />
        <div>{mostPopularAnecdote}</div>
        <div>has votes: {maxVote}</div>
      </section>
  )
}
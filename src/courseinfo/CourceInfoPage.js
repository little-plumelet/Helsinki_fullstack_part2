import { Header } from './Header';
import { Total } from './Total';
import { Content } from './Content';

export const CourseinfoPage = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <section>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </section>
  )
}
import { Header } from './Header';
import { Total } from './Total';
import { Content } from './Content/Content';

export const Course = ({course}) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

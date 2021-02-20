import { useSelector } from "react-redux";
import { selectCourses } from "./coursesSlice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Courses } from "./Courses";
import { Course } from "./Course";
import { AddCourse } from "./AddCourse";

export const App = () => {
  const courses = useSelector(selectCourses);
  console.log(courses);

  return (
    <Router>
      <div className="app">
        <div className="header">
          <h1>The best place to sell your courses online!</h1>
          <Link to="/addCourse" className="header__button">
            Sell a course
          </Link>
        </div>

        <Switch>
          <Route path="/" exact>
            <div className="courses">
              {courses.map((course) => (
                <Link to={`/${course.id}`} className="link" key={course.id}>
                  <Courses course={course} />
                </Link>
              ))}
            </div>
          </Route>
          <Route path="/addCourse">
            <AddCourse />
          </Route>
          <Route path="/:id">
            <Course />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

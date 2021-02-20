import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCourses } from "./coursesSlice";

export const Course = () => {
  const { id } = useParams();
  const courses = useSelector(selectCourses);

  return (
    <div>
      {courses &&
        courses.map((course) => {
          return (
            id === course.id && (
              <div className="ind__course" key={id}>
                <h1>{course.name}</h1>
                <span>{course.by}</span>
                <div>
                  <p>{course.description}</p>
                  <h1>${course.price}</h1>
                </div>
                <h4>{course.rating}/5</h4>
                <button>Buy Now</button>
              </div>
            )
          );
        })}
    </div>
  );
};

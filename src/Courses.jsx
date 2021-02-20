export const Courses = ({ course }) => {
  return (
    <div className="course">
      <div>
        <h1 className="course__title">{course.name}</h1>
        <p className="course__description">{course.description}</p>
      </div>
      <div>
        <h3 className="course__price">${course.price}</h3>
        <h3 className="course__by">by {course.by}</h3>
        <p className="course__rating">{course.rating}/5</p>
      </div>
    </div>
  );
};

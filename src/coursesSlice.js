import { createSlice, nanoid } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [
      {
        name: "React Master",
        description: "100 React Projects",
        id: nanoid(),
        price: 30,
        by: "Brad Traversy",
        rating: 4,
      },
      {
        name: "Redux Master",
        description: "100 Redux Projects",
        id: nanoid(),
        price: 10,
        by: "Webdev Simplified",
        rating: 5,
      },
      {
        name: "Javascript Master",
        description: "100 Vanilla Javascript Projects",
        id: nanoid(),
        price: 15,
        by: "Coding Junkie",
        rating: 3,
      },
      {
        name: "CSS King",
        description: "100 HTML/CSS Projects",
        id: nanoid(),
        price: 9,
        by: "Sonny Sanga",
        rating: 5,
      },
    ],
  },
  reducers: {
    setCourses: (state, { payload }) => {
      state.courses.push(payload);
    },
  },
});

export const selectCourses = (state) => state.courses.courses;
export const { setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;

import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCourses } from "./coursesSlice";

export const AddCourse = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [by, setBy] = useState("");
  const [rating, setRating] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const addCourse = (e) => {
    e.preventDefault();
    if (name !== "" && description !== "" && by !== "" && rating !== "") {
      dispatch(
        setCourses({
          name,
          description,
          price,
          by,
          rating,
          id: nanoid(),
        })
      );
      history.push("/");
    } else {
      alert("Fill out the empty fields!");
    }
  };

  return (
    <div className="add__course">
      <input
        type="text"
        placeholder="Name of the course"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="$$$ Price of the course"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course creator"
        value={by}
        onChange={(e) => setBy(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course rating (out of 5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={addCourse}>Add Course</button>
    </div>
  );
};

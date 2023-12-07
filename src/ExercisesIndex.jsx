/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

/* eslint-disable react/prop-types */
export function ExercisesIndex(props) {
  useEffect(props.onIndexExercises, []);
  return (
    <div>
      <h2>All Exercises</h2>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}

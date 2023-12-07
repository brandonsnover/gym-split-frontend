import axios from "axios";
import { useState } from "react";
import { ExercisesIndex } from "./ExercisesIndex";

export function Content() {
  const [exercises, setExercises] = useState([]);

  const handleIndexExercises = () => {
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      setExercises(response.data);
    });
  };

  return (
    <main>
      <h1>Welcome to React!</h1>
      <ExercisesIndex exercises={exercises} onIndexExercises={handleIndexExercises} />
    </main>
  );
}

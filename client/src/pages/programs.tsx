import { useEffect, useState } from "react";

interface Programs {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [program, setProgram] = useState<Programs[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setProgram(data));
  }, []);
  return (
    <>
      <div>
        {program.map((programs) => (
          <div key={programs.id}>
            <h2>{programs.title}</h2>
            <p>{programs.synopsis}</p>
            <img src={programs.poster} alt="poster" />
            <p>{programs.country}</p>
            <p>{programs.year}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Programs;

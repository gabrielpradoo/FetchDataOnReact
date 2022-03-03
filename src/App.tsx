import { useEffect, useState } from "react";

// Default method to fetch data on React

type Repository = {
  name: string;
  description: string;
};

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/gabrielpradoo/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      });

    console.log(repositories);
  }, []);

  return (
    <div>
      {repositories.map((repositories) => (
        <div>
          <h3>{repositories.name}</h3>
          <p>{repositories.description}</p>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;

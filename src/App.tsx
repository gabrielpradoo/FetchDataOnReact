import { useFetch } from "./hooks/useFetch";

type Repository = {
  name: string;
  description: string;
};

function App() {
  const { data: repositories, isFetching } = useFetch<Repository[]>(
    "users/gabrielpradoo/repos"
  );

  return (
    <ul>
      {isFetching && <p>Carregando</p>}
      {repositories?.map((repo) => (
        <li key={repo.name}>
          <strong>{repo.name}</strong>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;

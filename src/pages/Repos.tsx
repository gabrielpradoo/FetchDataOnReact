import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

// Consumo de APIs RESTful no React da maneira certa

export type Repository = {
  name: string;
  description: string;
};

export function Repos() {
  const { data, isFetching } = useQuery<Repository[]>(
    "repos",
    async () => {
      const response = await axios.get(
        "https://api.github.com/users/gabrielpradoo/repos"
      );
      return response.data;
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  );

  return (
    <ul>
      {isFetching && <p>Carregando</p>}
      {data?.map((repo) => (
        <li key={repo.name}>
          <Link to={`repos/${repo.name}`}>{repo.name}</Link>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  );
}

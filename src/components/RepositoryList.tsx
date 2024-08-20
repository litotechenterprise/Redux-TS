import { useState } from "react";

import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";

export const RepositoryList: React.FC = () => {
  const [text, setText] = useState<string>("");

  const { searchRespositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRespositories(text);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {error && <h3>{error}</h3>}

      {loading && <div>Loading...</div>}

      {!loading &&
        !error &&
        data.map((name: string, idx: number) => {
          return <div key={idx}>{name}</div>;
        })}
    </div>
  );
};

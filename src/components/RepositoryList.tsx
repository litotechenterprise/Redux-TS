import { useState } from "react";
import { useDispatch } from "react-redux";

import { actionCreators } from "../redux";

export const RepositoryList: React.FC = () => {
  const [text, setText] = useState<string>("");

  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(actionCreators.searchRespositories(text) as any);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

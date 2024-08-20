import { Action, RepositoryActionEnum, RepositoryState } from "../../types";

const initialState: RepositoryState = {
  loading: false,
  data: [],
  error: null,
};

const reducer = (
  state: RepositoryState = initialState,
  action: Action
): RepositoryState => {
  switch (action.type) {
    case RepositoryActionEnum.SEARCH_REPOSITORY:
      return {
        loading: true,
        error: null,
        data: [],
      };

    case RepositoryActionEnum.SEARCH_REPOSITORY_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };

    case RepositoryActionEnum.SEARCH_REPOSITORY_ERROR:
      return {
        loading: true,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;

import axios from "axios";
import { RepositoryActionEnum } from "../../types";
import { Action } from "../../types";
import { Dispatch } from "redux";

const URL = "https://registry.npmjs.org/-/v1/search";

export const searchRespositories = (text: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: RepositoryActionEnum.SEARCH_REPOSITORY,
    });

    try {
      const { data } = await axios.get(URL, { params: { text } });

      const results = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: RepositoryActionEnum.SEARCH_REPOSITORY_SUCCESS,
        payload: results,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: RepositoryActionEnum.SEARCH_REPOSITORY_ERROR,
          payload: err.message,
        });
      }
    }
  };
};

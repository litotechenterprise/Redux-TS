export interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export enum RepositoryActionEnum {
  SEARCH_REPOSITORY = "search_repository",
  SEARCH_REPOSITORY_SUCCESS = "search_repository_success",
  SEARCH_REPOSITORY_ERROR = "search_repository_error",
}

export interface RepositorySearchAction {
  type: RepositoryActionEnum.SEARCH_REPOSITORY;
}
export interface RepositorySearchSuccessAction {
  type: RepositoryActionEnum.SEARCH_REPOSITORY_SUCCESS;
  payload: string[];
}
export interface RepositorySearchErrorAction {
  type: RepositoryActionEnum.SEARCH_REPOSITORY_ERROR;
  payload: string;
}

export type Action =
  | RepositorySearchAction
  | RepositorySearchErrorAction
  | RepositorySearchSuccessAction;

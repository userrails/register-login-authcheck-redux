import { FETCH_ARTICLES } from '../actions/types';

export default function articleReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.articles
    default:
      return state;
  }
}

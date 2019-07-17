import { FETCH_ARTICLES } from '../actions/types';

const initialState = {
  articles: []
}

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      // return action.articles
      return {...state, articles: action.payload}
    default:
      return state;
  }
}

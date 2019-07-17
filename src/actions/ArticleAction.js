import { FETCH_ARTICLES } from './types';
import axios from 'axios';

const apiUrl = "http://localhost:5000";

// action
export const fetchAllArticlesAction = (articles) => {
  return {
    type: FETCH_ARTICLES,
    payload: articles
  }
}

// Action creator
export const fetchAllArticlesFunction = () => {
  return (dispatch) => {
    return axios.get(apiUrl + '/articles')
      .then(response => {
        dispatch(fetchAllArticlesAction(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
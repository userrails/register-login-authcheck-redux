import { FETCH_ARTICLES } from './types';
import axios from 'axios';

const apiUrl = "http://localhost:5000";

// action
export const fetchArticlesAction = (articles) => {
  return {
    type: FETCH_ARTICLES,
    articles
  }
}

// Action creator
export const fetchAllArticlesFunction = () => {
  return (dispatch) => {
    return axios.get(apiUrl + '/articles')
      .then(response => {
        dispatch(fetchArticles(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
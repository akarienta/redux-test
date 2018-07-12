import { FETCH_ARTICLES } from './constants';

import { articlesRef } from '../config/firebase';

const addArticle = article => async () => {
  articlesRef.push().set(article);
};

const fetchArticles = () => async dispatch => {
  articlesRef.on('value', snapshot => {
    dispatch({
      type: FETCH_ARTICLES,
      payload: Object.values(snapshot.val()),
    });
  });
};

export { addArticle, fetchArticles };

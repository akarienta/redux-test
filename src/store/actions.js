import { FETCH_ARTICLES } from './constants';
import sortBy from 'lodash/sortBy';
import pick from 'lodash/pick';

import { articlesRef } from '../config/firebase';

const addArticle = article => () => {
  articlesRef.child(article.id).set(article);
};

const removeArticle = id => () => {
  articlesRef.child(id).remove();
};

const fetchArticles = () => dispatch => {
  articlesRef.on('value', snapshot => {
    const unsortedArticleList = snapshot.val() ? Object.values(snapshot.val()) : [];
    const payload = sortBy(unsortedArticleList, ['timestamp']).map(article =>
      pick(article, ['id', 'title']),
    );

    dispatch({
      type: FETCH_ARTICLES,
      payload,
    });
  });
};

export { addArticle, fetchArticles, removeArticle };

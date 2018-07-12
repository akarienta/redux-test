import { FETCH_ARTICLES } from './constants';

const initialState = {
  articles: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...state, articles: action.payload };
    default:
      return state;
  }
};

export default rootReducer;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchArticles } from '../../store/actions';
import { LeftLi } from './styles';

const mapStateToProps = state => ({ articles: state.articles });

const mapDispatchToProps = {
  fetchArticles,
};

class ConnectedArticleList extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
    fetchArticles: PropTypes.func.isRequired,
  };

  static defaultProps = {
    articles: [],
  };

  componentWillMount() {
    const { fetchArticles } = this.props;

    fetchArticles();
  }

  render() {
    const { articles } = this.props;

    if (articles.length === 0) {
      return <div>Loading...</div>;
    } else {
      return <ul>{articles.map(el => <LeftLi key={el.id}>{el.title}</LeftLi>)}</ul>;
    }
  }
}

const ArticleList = connect(mapStateToProps, mapDispatchToProps)(ConnectedArticleList);

export default ArticleList;

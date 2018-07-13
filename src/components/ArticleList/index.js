import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex, Box, Dot, Link } from 'rebass';

import { fetchArticles, removeArticle } from '../../store/actions';

const mapStateToProps = state => ({ articles: state.articles });

const mapDispatchToProps = {
  fetchArticles,
  removeArticle,
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
    removeArticle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    articles: [],
  };

  componentWillMount() {
    const { fetchArticles } = this.props;

    fetchArticles();
  }

  removeArticle = id => () => {
    const { removeArticle } = this.props;

    removeArticle(id);
  };

  render() {
    const { articles } = this.props;

    if (articles.length === 0) {
      return (
        <Box my={4} fontSize={3}>
          Loading...
        </Box>
      );
    } else {
      return (
        <Flex justifyContent="center">
          <Box my={4}>
            {articles.map(article => (
              <Flex alignItems="center" key={article.id}>
                <Dot bg="#0067ee" hover={{ bg: '#0067ee' }} focus={{ bg: '#0067ee' }} size={18} />
                <Box ml={1} my={2} fontSize={3} key={article.id}>
                  {article.title}
                </Box>
                <Box ml={2} fontSize={1}>
                  <Link href="#!" onClick={this.removeArticle(article.id)}>
                    remove
                  </Link>
                </Box>
              </Flex>
            ))}
          </Box>
        </Flex>
      );
    }
  }
}

const ArticleList = connect(mapStateToProps, mapDispatchToProps)(ConnectedArticleList);

export default ArticleList;

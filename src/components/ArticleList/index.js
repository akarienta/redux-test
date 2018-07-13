import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex, Box, Dot, Heading } from 'rebass';

import { fetchArticles } from '../../store/actions';

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
      return <Box my={4} fontSize={3}>Loading...</Box>;
    } else {
      return (
        <Flex justifyContent="center">
          <Box my={4}>
            {articles.map(el => (
              <Flex alignItems="center" key={el.id}>
                <Dot bg="#0067ee" hover={{ bg: '#0067ee' }} focus={{ bg: '#0067ee' }} size={18} />
                <Box ml={1} my={2} fontSize={3} key={el.id}>{el.title}</Box>
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

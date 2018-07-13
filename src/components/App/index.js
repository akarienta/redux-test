import React from 'react';
import { Flex, Box, Heading } from 'rebass';

import logo from './logo.svg';
import { Logo } from './styles';
import ArticleList from '../ArticleList';
import AddArticleForm from '../AddArticleForm';

const App = () => (
  <Flex flexDirection="column" style={{ textAlign: 'center' }}>
    <Box p={3} width={1} bg="#222" color="#fff">
      <Logo src={logo} alt="logo" />
      <Heading py={2} fontSize={5} is="h1">
        Articles
      </Heading>
    </Box>
    <Box width={1}>
      <ArticleList />
      <AddArticleForm />
    </Box>
  </Flex>
);

export default App;

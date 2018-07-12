import React from 'react';

import logo from './logo.svg';
import { Main, Logo, Header, Title, Articles } from './styles';
import ArticleList from '../ArticleList';
import AddArticleForm from '../AddArticleForm';

const App = () => (
  <Main>
    <Header>
      <Logo src={logo} alt="logo" />
      <Title>Articles</Title>
    </Header>
    <Articles>
      <ArticleList />
      <AddArticleForm />
    </Articles>
  </Main>
);

export default App;

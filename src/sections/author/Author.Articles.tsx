import React from 'react';
import styled from '@emotion/styled';

import mediaqueries from '../../styles/media';
import { IArticle } from '../../types/types';

import MainArticlesList from '../main/Main.ArticlesList';

interface AuthorArticlesProps {
  articles: IArticle[];
}

const AuthorArticlesContainer = styled.div`
  background: linear-gradient(180deg, ${p => p.theme.colors.card} 0%, rgba(249, 250, 252, 0) 91.01%);
  border-radius: 8px;
  padding: 88px 98px;
  position: relative;
  z-index: 1;

  ${mediaqueries.desktop_medium`
    padding: 80px;
  `}

  ${mediaqueries.desktop`
    padding: 0;
    background: transparent;
  `}
`;

const AuthorArticles: React.FC<AuthorArticlesProps> = ({ articles }) => {
  return (
    <AuthorArticlesContainer>
      <MainArticlesList articles={articles} alwaysShowAllDetails />
    </AuthorArticlesContainer>
  );
};

export default AuthorArticles;

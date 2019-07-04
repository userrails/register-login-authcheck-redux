import React from 'react';
import {connect} from 'react-redux';
import Article from '../../components/articles/Article';

function ArticleList({ articles }) {
  if(!articles.length) {
    return (
        <div>
          There are no any articles found yet!
        </div>
      )
  }
  return (
    <div>
      {articles.map(article => {
        return (
          <Article article={article} key={article.id} />
        );
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articleReducer
  }
}

export default connect(mapStateToProps)(ArticleList);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllArticlesFunction} from '../../actions/ArticleAction';
import Article from '../../components/articles/Article';

class ArticleList extends Component {
  render () {
    if (!this.props.articles.length) {
      return (
        <div>
          There are no any articles found yet!
        </div>
      )
    }
    return (
      <div>
        {this.props.articles.map(article => {
          return (
            <Article article={article} key={article.id} />
          );
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articleReducer.articles
  }
}

export default connect(mapStateToProps, {fetchAllArticlesFunction})(ArticleList);

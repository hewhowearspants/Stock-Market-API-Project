import React from 'react';

const NewsArticle = ({ article }) => {
  const { url, headline, summary } = article;
  return (
    <article className='news-article'>
      <a href={url}>{headline}</a>
      <p>{summary}</p>
    </article>
  )
}

export default NewsArticle;
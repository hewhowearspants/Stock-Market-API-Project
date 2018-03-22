import React from 'react';
import moment from 'moment';

const NewsArticle = ({ article }) => {
  const { url, headline, summary, datetime, source } = article;
  let formattedTime = moment(datetime).fromNow();

  return (
    <article className='news-article'>
      <a className='headline' href={url}>{headline}</a><span className='date'> {formattedTime}</span>
      <p className='source'>Source: {source}</p>
      {!summary.includes('No summary available') && <p className='summary'>{summary}</p>}
    </article>
  )
}

export default NewsArticle;
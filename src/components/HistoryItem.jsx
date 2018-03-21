import React from 'react';

const HistoryItem = ({ data }) => {
  const { date, close } = data;
  return (
    <div className='history-date'>
      <span>{date} <b>${close.toFixed(2)}</b></span>
    </div>
  )
}

export default HistoryItem;
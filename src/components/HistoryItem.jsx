import React from 'react';

const HistoryItem = ({ data }) => {
  const { label, close } = data;
  return (
    <div className='history-date'>
      <span>{label} <b>${close.toFixed(2)}</b></span>
    </div>
  )
}

export default HistoryItem;
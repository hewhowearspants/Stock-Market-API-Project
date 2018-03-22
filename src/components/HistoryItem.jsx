import React from 'react';

const HistoryItem = ({ data }) => {
  const { label, close, high, low } = data;
  return (
    <div className='history-item'>
      <b className='history-item-label'>{label}</b>
      <b>${close.toFixed(2)}</b>
      <div>
      <p style={{color: 'green'}}><i className="fas fa-caret-up"></i>{high.toFixed(2)}</p>
      <p style={{color: 'red'}}><i className="fas fa-caret-down"></i>{low.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default HistoryItem;
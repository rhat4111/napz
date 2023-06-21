import React from 'react';
import '../assets/scss/components/TokenItem.scss';

const TokenItem = ({ data, active, handleClick }) => {
  return (
    <div className="container">
      <div className={`item ${active && `active`}`} onClick={() => handleClick(data)}>
        <img src={data.avatar} className="avatar" alt={data.name} />
        <p className="name">{data.name}</p>
        <p className="rate">{data.rate} USDT</p>
        <div className="progressbar">
          <div className="bg"></div>
          <div className="bar" style={{ width: `${Math.floor(data.amount)}%` }}></div>
        </div>
        <div className="footer">
          <span>{Math.floor(data.amount)}%</span>
          <span><span className="amount">{data.amount}</span>/100.000</span>
        </div>
      </div>
    </div>
  )
}

export default TokenItem;
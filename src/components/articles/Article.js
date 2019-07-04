import React from 'react';

export default ({ article: {title, body, id}}) => {
  return (
      <div key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    )
}

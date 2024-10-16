import React from 'react';

const FxItem = ({rate, pair1, pair2}) => {
  return (
    <div>
        <strong>{pair1}/{pair2}</strong>
        <span className='ml-2'>{rate}</span>
    </div>
  );
};

export default FxItem
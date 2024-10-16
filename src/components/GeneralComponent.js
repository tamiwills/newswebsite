import React from 'react';
// import './NewsElement.css';

const GeneralComponent = ({category, datetime, headline, id, image, related, source, summary, url}) => {
  return (
    <div>
      {/* <ul className='w-90 border-2'>
        <li>{category}</li>
        <li>{datetime}</li>
        <li>{headline}</li>
        <li>{id}</li>
        <li>{image}</li>
        <li>{related}</li>
        <li>{source}</li>
        <li>{summary}</li>
        <li>{url}</li>
      </ul> */}

      <div className='newswebsite'>
        <div className='w-90 border-2 flex'>
            <img className='w-[100px]' src={image} alt={image} />
            {/* <h3><a href={url}>{category}</a></h3> */}
            <p>{headline}</p>
        </div>
      </div>
        
    </div>
  )
}

export default GeneralComponent;
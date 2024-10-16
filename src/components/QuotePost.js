import React from 'react';

const QuotePost = ({post, loading}) => {
  if(loading) {
    return <p>loading...</p>
  }
  return (
    <div>
      
        
        <div className='w-90 flex'>
          
            <p className='ml-2 border-none'>{post.c}</p>
            
        </div>

    </div>
  )
}

export default QuotePost;
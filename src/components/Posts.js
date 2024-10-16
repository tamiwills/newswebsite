import React from 'react';

const Posts = ({posts, loading}) => {
  if(loading) {
    return <p>loading...</p>
  }
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
        
          <a href={post.url} target="_blank" className='flex border-solid border-2'>
            <img className='w-[100px] text-white' src={post.image} alt={post.category} />
            {/* <h3><a href={url}>{category}</a></h3> */}
            <p>{post.headline}</p>
          </a>
            
        
        </div>
      ) 
      )}
    </div>
  )
}

export default Posts;
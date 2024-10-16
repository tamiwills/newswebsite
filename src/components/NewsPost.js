import React from 'react';

const NewsPost = ({posts, loading}) => {
  if(loading) {
    return <p>loading...</p>
  }
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
        <div className='w-90 border-2 flex'>
          <a href={post.url} target="_blank" className='flex'>
            <img className='w-[100px] text-white' src={post.urlToImage} alt={post.urlToImage} />
            {/* <h3><a href={url}>{category}</a></h3> */}
            <p>{post.title}</p>
          </a>
            
        </div>
      </div>
      ) 
      )}
    </div>
  )
}

export default NewsPost;
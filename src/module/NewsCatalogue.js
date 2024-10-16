import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import NewsPost from '../components/NewsPost';
import axios from 'axios';

const NewsCatalogue = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    
    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const response = await axios.get('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=eaa68c134c7a48e194e30e3a2d18d343');
              setArticles(response.data.articles);
            //print data
            console.log(response);
            setLoading(false);
        }
        getArticles()
    },[])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = articles.slice(indexOfFirstPost, indexOfLastPost)

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
        <NewsPost posts={currentPost} loading={loading}/>
        <Pagination 
            postsPerPage={postsPerPage}
            totalPost={articles.length}
            paginate={paginate}/>
    </div>
  )
}

export default NewsCatalogue;
import React, { useEffect, useState } from 'react';
import { generalNews } from '../components/mockDetail';
import GeneralComponent from '../components/GeneralComponent';
import { fetchExchangeRates } from './fxServices';
import axios from 'axios';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';

// import { fetchExchangeRates } from './fxServices';
// import GeneralComponent from '../components/GeneralComponent';

const MarketNews = () => { 

    // const [articles, setArticles] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    
    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            const response = await axios.get("https://finnhub.io/api/v1/news?category=general&token=cod3b8hr01qknpftj2t0cod3b8hr01qknpftj2tg");
            // const data = await res.json();
            setPosts(response.data);
            //print data
            // return response.json();
            console.log(response);
            setLoading(false);
        }
        getPosts()
    },[])

    // Get current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
        

        <Posts posts={currentPost} loading={loading}/>
        <Pagination 
            postsPerPage={postsPerPage}
            totalPost={posts.length}
            paginate={paginate}/>
        {/* {articles.slice(0, 10).map(post  => 
        {
            
            return(
                <GeneralComponent
                    category = {post.category}
                    datetime = {post.datetime}
                    headline = {post.headline}
                    id = {post.id}
                    image = {post.image}
                    related = {post.related}
                    source = {post.source}
                    summary = {post.summary}
                    url = {post.url}
                />
            )
        }
        )} */}
       
                {/* <GeneralComponent
                    category = {generalNews.category}
                    datetime = {generalNews.datetime}
                    headline = {generalNews.headline}
                    id = {generalNews.id}
                    image = {generalNews.image}
                    related = {generalNews.related}
                    source = {generalNews.source}
                    summary = {generalNews.summary}
                    url = {generalNews.url}
                /> */}
            
    </div>
  )
}

export default MarketNews;
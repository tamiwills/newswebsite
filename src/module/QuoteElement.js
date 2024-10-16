import React, { useEffect, useState } from 'react';
import QuotePost from '../components/QuotePost';
import { fetchAppleStock, fetchGoogleStock, fetchMetaStock, fetchMicroStock } from './fxServices';

const QuoteElement = () => {
    const [posts, setPosts] = useState({});
    const [microSoft, setMicroSoft] = useState({});
    const [meta, setMeta] = useState({});
    const [google, setGoogle] = useState({});
    const [loading, setLoading] = useState(false);    
    
    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            // const response = await axios.get("https://finnhub.io/api/v1/quote?symbol=AAPL&token=cod3b8hr01qknpftj2t0cod3b8hr01qknpftj2tg");
           const appleStock = await fetchAppleStock();
           const apple = appleStock.data;
            setPosts(apple);
            //print data
            // return response.json();
            console.log(apple);
            setLoading(false);
        }
        getPosts()
        const getMicroPost = async () => {
            setLoading(true);
            // const response = await axios.get("https://finnhub.io/api/v1/quote?symbol=AAPL&token=cod3b8hr01qknpftj2t0cod3b8hr01qknpftj2tg");
           const microStock = await fetchMicroStock();
           const micro = microStock.data;
            setMicroSoft(micro);
            //print data
            // return response.json();
            console.log(micro);
            setLoading(false);
        }
        getMicroPost()
        const getMetaverse = async () => {
            setLoading(true);
            // const response = await axios.get("https://finnhub.io/api/v1/quote?symbol=AAPL&token=cod3b8hr01qknpftj2t0cod3b8hr01qknpftj2tg");
           const metaStock = await fetchMetaStock();
           const metaverse = metaStock.data;
            setMeta(metaverse);
            //print data
            // return response.json();
            console.log(metaverse);
            setLoading(false);
        }
        getMetaverse()
        
        const getGooglePost = async () => {
            setLoading(true);
            // const response = await axios.get("https://finnhub.io/api/v1/quote?symbol=AAPL&token=cod3b8hr01qknpftj2t0cod3b8hr01qknpftj2tg");
           const googleStock = await fetchGoogleStock();
           const google = googleStock.data;
            setGoogle(google);
            //print data
            // return response.json();
            console.log(google);
            setLoading(false);
        }
        getGooglePost()
    },[])

    // Get current page
  

  return (
    <div>
        <div className='flex space-x-4 text-white'>
            <div className='flex'>
                <strong>AAPL</strong>
                <QuotePost post={posts} loading={loading}/>
            </div>
            <div className='flex'>
                <strong>MSFT</strong>
                <QuotePost post={microSoft} loading={loading}/>
            </div>
            <div className='flex'>
                <strong className=''>META</strong>
                <QuotePost post={meta} loading={loading}/>
            </div>
            <div className='flex'>
                <strong>GOOGL</strong>
                <QuotePost post={google} loading={loading}/>
            </div>
           
        </div>
        
    </div>
  )
}

export default QuoteElement;
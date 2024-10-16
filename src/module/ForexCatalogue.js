import React, { useEffect, useState } from 'react';
import NewsElement from './NewsElement';
import axios from 'axios';
import { fetchExchangeRates } from './fxServices';
import FxItem from '../components/FxItem';
import QuoteElement from './QuoteElement';

const ForexCatalogue = () => {
    
    const [rates, setRates] = useState([]);
    
    useEffect(() => {
        let componentIsMounted = true;
        const getFxData = async () => {
           fetchExchangeRates()
           .then(data => {
                
                if (componentIsMounted) {
                    setRates(data.quotes);
                }
           })
           .catch(err => {
                console.log(err);
           });
          // const response = await fetch('https://marketdata.tradermade.com/api/v1/live?currency=EURGBP,GBPJPY&api_key=sJNX3tqiZww2bpK8S-rD');
          // setRates(response.data);
          // console.log(response);

        };
        getFxData();

        return () => {
            componentIsMounted = false;
        }
    },[])
  return (
    <div className='flex space-x-4'>

      {rates.map(key => <FxItem key={key} pair1={key.base_currency} pair2={key.quote_currency} rate={key.mid} />)}
      {<QuoteElement className='ml-2' />}
      
       
           {/* <FxItem fxSymbol={rates.quotes[0].ask} fxRate={rates.quotes[0].mid} /> */}
          
        
    </div>
    // <div>
    //     {articles.map(article => {
    //         return(
    //             <NewsElement
    //                 title = {article.title}
    //                 description = {article.description}
    //                 url = {article.url}
    //                 urlToImage = {article.urlToImage}
    //             />
    //         )
    //     })}
    // </div>
  )
}

export default ForexCatalogue;
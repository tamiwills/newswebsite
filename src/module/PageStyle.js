import React from 'react';
import ForexCatalogue from './ForexCatalogue';
import TimeUpdate from './TimeUpdate';
import FullDate from './FullDate';
import MarketNews from './MarketNews';
import Marquee from 'react-fast-marquee';
import QuoteElement from './QuoteElement';
import NewsCatalogue from './NewsCatalogue';

const PageStyle = () => {
  return (
    <div>
        <div className='relative'>
            <header className='w-[100%] top-0 left-0 right-0 fixed z-9999'>
                <div className='w-[100%] flex text-white box-border justify-between bg-[#2f365f] p-3'>
                    <h1 className='text-2xl font-bold p-3'>STARTNEWS</h1>
                    <div className='flex text-right'>
                        <ul className='flex transition-3'>
                            <li className='p-4'><a href='#daytrade' className='hover:border-b-4 border-indigo-300 text-lg py-7 px-8'>DAY TRADE</a></li>
                            <li className='p-4'><a href='#Forex' className='hover:border-b-4 border-indigo-300 text-lg py-7 px-8'>FOREX</a></li>
                            <li className='p-4'><a href='#stock' className='hover:border-b-4 border-indigo-300 text-lg py-7 px-8'>STOCK</a></li>
                            <li className='p-4'><a href='#crypto' className='hover:border-b-4 border-indigo-300 text-lg py-7 px-8'>CRYPTO</a></li>
                            <li className='p-4'><a href='#goal' className='hover:border-b-4 border-indigo-300 text-lg py-7 px-8'>COMPANY GOAL</a></li>
                        </ul>
                        <div className='flex'>
                            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-10' type="text" id="lname" name="lastname" placeholder="Email address..." />
                            <button className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Subscribe</button>
                        </div>
                    </div>
                    
                </div>
                <div className='bg-[#3d5a5b] text-white h-full text-center'>
                    <Marquee speed={50} pauseOnHover>
                        {<ForexCatalogue />}
                    </Marquee>

                    
                </div>
            </header>
                
            <div className='bg-[#f7f1ed] w-[100%] flex box-border text-center justify-between pt-2'>
                    <div className='w-[25%] bg-[#fedd89] flex flex-col gap-8'>
                        <div>
                            <strong className='text-[1.5rem]'>News headlines</strong>
                            {<NewsCatalogue />}
                        </div>
                        <div>
                            <strong className='text-[1.5rem]'>Business News headlines</strong>
                            {<MarketNews />}
                        </div>
                       
                    </div>
                    <div className='w-[50%] flex flex-col gap-10 p-10'>
                        <div>{<TimeUpdate />}</div>
                        <div>
                            <h1 id='daytrade' className='mt-10 text-[2rem]'>What Is Day Trading?</h1>
                            <p>
                                Day trading is a fast-paced form of investing where individuals buy and sell securities within the same trading day. The primary goal is to profit from short-term price movements in stocks, options, futures, and other financial instruments. Day traders typically use a combination of strategies and analysis, including technical analysis, which focuses on past price movements and trading patterns, and momentum, which involves capitalizing on short-term trends and reversals. Unlike long-term investors, day traders are less concerned with the fundamental value of the securities and more focused on capturing immediate gains from market fluctuations.
                            </p>
                            <p>
                                Day trading is most commonly observed in the stock markets and on the foreign exchange (forex), where currencies are traded.
                            </p>
                            <p>
                                Day traders are attuned to events that cause short-term market moves. Trading based on the news is one popular technique. Scheduled announcements like releasing economic statistics, corporate earnings, or interest rate changes are subject to market expectations and market psychology. That is, markets react when those expectations are unmet or exceeded—usually with sudden, significant moves that can benefit day traders.
                            </p>
                        </div>
                        
                        <div>
                            <h1 id='forex' className='text-[2rem]'>What is forex trading?</h1>
                            <p>
                            Forex trading, also known as foreign exchange or FX trading, is the conversion of one currency into another. FX is one of the most actively traded markets in the world, with individuals, companies and banks carrying out around $6.6 trillion worth of forex transactions every single day.
                            </p>
                            <p>
                            While a lot of foreign exchange is done for practical purposes, the vast majority of currency conversion is undertaken by forex traders to earn a profit. The amount of currency converted every day can make price movements of some currencies extremely volatile which is something to be aware of before you start forex trading.
                            </p>
                            <p>
                            We are one of the world leading retail forex providers with a range of major, minor and exotic currency pairs for you to go long or short on.
                            </p>
                        </div>
                        
                        <div>
                            <h1 id='stock' className='text-[2rem]'>What Is Stock Trading?</h1>
                            <p>
                            Stock trading is the process of buying and selling stocks in stock markets. It is a way for companies to raise capital by selling shares of their company to investors. You can buy and sell these shares on the stock exchange to make a profit.
                            </p>
                            <p>
                            Stock trading involves analysing market trends, researching companies, and making informed decisions about buying and selling stocks. There are different types of stock trading strategies that you can use to make a profit, including day trading, swing trading, position trading, and value investing. Stock trading can be a rewarding way to grow your wealth and achieve your financial goals.
                            </p>    
                        </div>   
                        
                        <div>
                            <h1 id='crypto' className='text-[2rem]'>What is cryptocurrency trading?</h1>
                            <p>
                            Cryptocurrency trading involves speculating on price movements via a CFD trading account, or buying and selling the underlying coins via an exchange. Here you’ll find more information about cryptocurrency trading, how it works and what moves the markets.
                            </p>
                        </div>
                        
                        <div>
                            <h1 id='goal' className='text-[2rem]'>What is Our Company Goal</h1>
                            <p>5star trading is a company that provide the public with the best day to day trading tips for individual traders and company respectively. Our team of analyst source from different news and tools for trading to make our trade accurate for $0. So feel free to copy our trade. you can drop your comments</p>
                            <textarea rows="4" cols="50" name="comment" form="usrform">comments </textarea> <br />
                            <button>Submit</button>
                        </div>
                        
                    </div>
                    <div className='w-[25%] bg-[#fedd89]'>
                        <div>{<FullDate />}</div>
                    
                    </div>
            </div>
            
            <div className='bg-[#7a39e0] text-center p-20'><footer>footer</footer></div>
        </div>
    </div>
    
  );
};

export default PageStyle;
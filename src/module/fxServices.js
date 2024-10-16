import axios from "axios";

const basePath = "https://finnhub.io/api/v1";

// export const fetchExchangeRates = async () => {
//     const response = await fetch('https://api.forexrateapi.com/v1/latest?api_key=1d672d16728fa50429b799fe191eae89&base=USD&currencies=EUR,INR,JPY,CAD,GBP,BTC,AUD,RUB,CNY');
//     return response.json();
// };
export const fetchExchangeRates = async () => {
    const response = await fetch('https://marketdata.tradermade.com/api/v1/live?currency=EURUSD,EURGBP,GBPJPY,USDJPY,USDAUD,USDRUB,GBPUSD,BTCUSD&api_key=sJNX3tqiZww2bpK8S-rD');
    return response.json();
};

export const fetchAppleStock = async () => {
    const response = await axios.get(`${basePath}/quote?symbol=AAPL&token=cod3b8hr01qknpftj2t0cod3b8hr01qknpftj2tg`);
    return response;
};

export const fetchMicroStock = async () => {
    const response = await axios.get(`${basePath}/quote?symbol=MSFT&token=cod3b8hr01qknpftj2t0cod3b8hr01qknpftj2tg`);
    return response;
};
export const fetchMetaStock = async () => {
    const response = await axios.get(`${basePath}/quote?symbol=META&token=cod3b8hr01qknpftj2t0cod3b8hr01qknpftj2tg`);
    return response;
};
export const fetchGoogleStock = async () => {
    const response = await axios.get(`${basePath}/quote?symbol=GOOGL&token=cod3b8hr01qknpftj2t0cod3b8hr01qknpftj2tg`);
    return response;
};



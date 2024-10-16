import React from 'react';
import { useEffect, useState } from 'react';

const FullDate = () => {
  const [newyorkTime, setNewyorkTime] = useState()
  const [londonTime, setLondonTime] = useState()
  const [tokyoTime, setTokyoTime] = useState()
  const [sydneyTime, setSydneyTime] = useState()
  useEffect(() => {

    setInterval(() => {

      const dateObject = new Date();
      if(dateObject.length > 5){
        dateObject.shift();
      };

      const currentTime = dateObject.toLocaleString('en-US',{timeZone:'America/New_York', timeStyle:'medium', hourCycle:'h24'});
      const currentTime1 = dateObject.toLocaleString('en-US',{timeZone:'Europe/London', timeStyle:'medium', hourCycle:'h24'});
      const currentTime2 = dateObject.toLocaleString('en-US',{timeZone:'Asia/Tokyo', timeStyle:'medium', hourCycle:'h24'});
      const currentTime3 = dateObject.toLocaleString('en-US',{timeZone:'Australia/Sydney', timeStyle:'medium', hourCycle:'h24'});
      
      setNewyorkTime(currentTime);
      setLondonTime(currentTime1);
      setTokyoTime(currentTime2);
      setSydneyTime(currentTime3);
    }, 1000)


  }, [])
    
  return (
    <div className='text-center w-[100%]'>
        <div>
            <strong className='text-[1.5rem]'>New York</strong>
            <p>{newyorkTime}</p>
        </div>

        <div>
            <strong className='text-[1.5rem] '>London</strong>
            <p>{londonTime}</p>
        </div>

        <div>
            <strong className='text-[1.5rem]'>Tokyo</strong>
            <p>{tokyoTime}</p>
        </div>

        <div>
            <strong className='text-[1.5rem]'>Sydney</strong>
            <p>{sydneyTime}</p>
        </div>

    </div>
  )
}

export default FullDate;
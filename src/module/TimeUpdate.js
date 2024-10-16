import React from 'react';

const TimeUpdate = () => {
  return (
    <div>
        <table className='w-[100%] border-collapse'>
            <tr className='border border-indigo-200 bg-[#3d5a5b] text-white '>
                <th className='w-[33%]'>LOCAL TIME</th>
                <th className='border border-indigo-200 p-10 w-[33%]'>EST</th>
                <th className='w-[33%]'>UTC</th>
            </tr>
            <tr className='border border-indigo-200'>
                <td>Sydney Open – 7:00 AM  <br /> Sydney Close  – 4:00 PM</td>
                <td className='text-center border border-indigo-200 p-7 bg-[#93ad7a]'>4:00 PM  <br /> 1:00 AM</td>
                <td className='text-center'>9:00 PM  <br /> 6:00 AM</td>
            </tr>
            <tr className='border border-indigo-200'>
                <td>Tokyo Open – 9:00 AM  <br /> Tokyo Close – 6:00 PM</td>
                <td className='text-center border border-indigo-200 p-7 bg-[#93ad7a]'>7:00 PM  <br /> 4:00 AM</td>
                <td className='text-center'>12:00 AM  <br /> 9:00 AM</td>
            </tr>
            <tr className='border border-indigo-200'>
                <td>London Open – 8:00 AM <br /> London Close – 5:00 PM</td>
                <td className='text-center border border-indigo-200 p-7 bg-[#93ad7a]'>2:00 AM  <br /> 11:00 AM</td>
                <td className='text-center'>7:00 AM  <br /> 4:00 PM</td>
            </tr>
            <tr className='border border-indigo-200'>
                <td>New York Open – 8:00 AM  <br /> New York Close – 5:00 PM</td>
                <td className='text-center border border-indigo-200 p-7 bg-[#93ad7a]'>8:00 AM  <br /> 5:00 PM</td>
                <td className='text-center'>1:00 PM  <br /> 10:00 PM</td>
            </tr>
        </table>
    </div>
  )
}

export default TimeUpdate;
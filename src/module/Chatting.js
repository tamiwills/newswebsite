// import React, { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';
// const socket = io.connect("http://localhost:3001");

// // import { styles } from '../components/styles';


// const Chatting = () => {
//     const [message, setMessage] = useState("");
//     const [messageReceived, setMessageReceived] = useState("");

//     const sendMessage = () => {
//         socket.emit("send_message", {message});
//     }

//     useEffect(() => {
//         socket.on("receive_message", (data) => {
//             setMessageReceived(data.message);
//         });
//     }, [socket]);


 

  

        
//   return (
    
//             <div className=''>
//                 <input type="text" placeholder='Message...' className='border w-[90%]'
//                     onChange={(event) => setMessage(event.target.value) }
//                 />
//                 <button onClick={sendMessage}>send</button>
//                 <h1>Message:</h1>
//                 {messageReceived}
//             </div>
        
//   )
// }

// export default Chatting;




import React, { useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
// const socket = io.connect("http://localhost:3001");
// import { styles } from '../components/styles';

let socket;
const CONNECTION_PORT = io.connect("http://localhost:3001");


const Chatting = () => {
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState(false);
    // const [commentBody, setCommentBody] = useState("");
    // const [comments, setComments] = useState([]);
    // const ref = useRef(null);
    // const [message, setMessage] = useState("");
    // const [messaging, setMessaging] = useState("");
    // const [messageReceived, setMessageReceived] = useState("");
    // const [messageReceiver, setMessageReceiver] = useState("");
    // const [messageArray, setMessageArray] = useState([]);
    // const [messageArrays, setMessageArrays] = useState([]);

 
    const [loggedIn, setLoggedIn] = useState(false);
    const [room, setRoom] = useState("");
    const [userName, setUserName] = useState("");

    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);


    //   const sendMessage = async () => {
    //     // const messageContent = {
        
    //     //     message: message,
          
    //     // };
    
    //     await socket.emit("send_message", {message});
    //     setMessageList([...messageList, message]);
    //     setMessage("");
    //   };


          
    //   useEffect(() => {
    //     socket.on("receive_message", (data) => {
    //       setMessageList([...messageList, data]);
    //     });
    //   }, [socket]);

    

    useEffect(() => {
        socket = io(CONNECTION_PORT);
      }, [CONNECTION_PORT]);
    
      useEffect(() => {
        socket.on("receive_message", (data) => {
          setMessageList([...messageList, data]);
        });
      });
      const connectToRoom = () => {
        setLoggedIn(true);
        socket.emit("join_room", room);
      };
    
      const sendMessage = async () => {
        let messageContent = {
          room: room,
          content: {
            author: userName,
            message: message,
          },
        };
    
        await socket.emit("send_message", messageContent);
        setMessageList([...messageList, messageContent.content.message]);
        setMessage("");
      };

  return (
    <div>
        <p>Chat Room</p>
        <div className='right-[24px] bottom-[24px] fixed'
          
           >
            
                <div className='bg-slate-200 w-[500px] h-[500px] relative'
                    style={{
                        ...{opacity: visible ? '1' : '0'}
                    }}
                    >
                        
                        
                        
                        {/* <div>{messageReceived}</div>
                        <div>{messaging}</div> */}

                        <div>
                            {messageList.map((val, key) => {
                                 return (
                                            <div>
                                                <div>
                                            
                                                    {val.message}
                                                    
                                        
                                                </div>

                                            </div>
                                            
                                        );
                            })}
                        </div>
                        

                        {/* <div>{messageArray.map((comment)=>(
                            <div>{comment.body}</div>
                        ))}</div> */}
                        {/* <div>{messageArrays.map((comment)=>(
                            <div>{comment.body}</div>
                        ))}</div> */}
                       
                            
                    <div className='bottom-0 absolute left-0 right-0'>
                        <input value={message} type="text" placeholder='Message...' className='border w-[90%]'
                            onChange={(event) => setMessage(event.target.value) }
                        />
                        <button onClick={sendMessage}>send</button>
                    </div>
                   
                </div>
                <div className='float-right flex'>
                    <div
                        className='transition-3'
                        style={{
                            ...{opacity: hovered ? '1' : '0'}
                        }}
                    >
                        Hey it's Eve!!!
                    </div>
                    <img className='rounded-full h-[80px] w-[80px] transition-3 cursor-pointer'
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={() => setVisible(true)}
                        style={{
                            ...{border: hovered ? '1px solid #f9f0ff' : '4px solid #7a39c0'}
                        }}
                    src={ require('../image/depositphotos_140637986-stock-photo-woman-talking-by-telephone.png')} alt="Chat room" />
                </div>
            
        </div>
    </div>
  )
}

export default Chatting;
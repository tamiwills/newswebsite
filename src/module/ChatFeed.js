import React, { useState, useRef, useEffect } from 'react';
import { styles } from '../components/styles';


const ChatFeed = () => {
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState(false);
    const [commentBody, setCommentBody] = useState("");
    const [comments, setComments] = useState([]);
    const ref = useRef(null);


    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setVisible(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])

    const onComment = () => {
        const newComment = {
            body: commentBody,
        };
        setComments((prev) => [...prev, newComment]);
        setCommentBody("");
    };

        
  return (
    <div>
        <p>Chat Room</p>
        <div className='right-[24px] bottom-[24px] fixed'
           ref={ref}
           >
            
                <div className='bg-slate-200 w-[500px] h-[500px] relative'
                    style={{
                        ...{opacity: visible ? '1' : '0'}
                    }}
                    >
                        <div>{comments.map((comment) => (
                            <div>
                                {comment.body}
                            </div>
                            )
                            
                        )}</div>
                    <div className='bottom-0 absolute left-0 right-0'>
                        <input value={commentBody} type="text" placeholder='Message...' className='border w-[90%]'
                            onChange={(event) => setCommentBody(event.target.value) }
                        />
                        <button onClick={()=>onComment()}>send</button>
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

export default ChatFeed;
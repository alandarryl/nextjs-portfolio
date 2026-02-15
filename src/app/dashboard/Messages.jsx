import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { messageApi } from '@/utils/apiUrl';

function Messages() {

    const [data, setData] = useState([]);

    const getMessage = async () =>{
        try {
            const response = await axios.get(messageApi);

            setData(response)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect (() => {
        getMessage();
    }, [])


    return (
        <div>
            <h2>Messages</h2>
            <ul>
            {data.map((message)=>(
                <li key={message._id} >
                    <h2>{message.name}</h2>
                    <p>{message.email}</p>
                    <p>{message.message}</p>
                </li>
            )) }
            </ul>
        </div>
    )
}

export default Messages
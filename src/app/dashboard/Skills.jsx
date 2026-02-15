"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { skillsApi } from '@/utils/apiUrl';

function Skills() {

    const [data, setData] = useState([]);

    const getMessage = async () =>{
        try {
            const response = await axios.get(skillsApi.api);

            setData(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect (() => {
        getMessage();
    }, [])


    return (
        <div>
            <h2>Skills</h2>
            <ul>
            {data.map((skill)=>(
                <li key={skill._id} >
                    <h2>{skill.name}</h2>
                    <p>{skill.email}</p>
                    <p>{skill.message}</p>
                </li>
            )) }
            </ul>
        </div>
    )
}

export default Skills
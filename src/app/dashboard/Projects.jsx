"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { projectApi } from '@/utils/apiUrl';

function Projects() {

    const [data, setData] = useState([]);

    const getMessage = async () =>{
        try {
            const response = await axios.get(projectApi.api);

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
            <h2>Projects</h2>
            <ul>
            {data.map((project)=>(
                <li key={project._id} >
                    <h2>{project.name}</h2>
                    <p>{project.email}</p>
                    <p>{project.message}</p>
                </li>
            )) }
            </ul>
        </div>
    )
}

export default Projects
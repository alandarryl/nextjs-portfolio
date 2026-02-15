"use client"
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card';


function CardsGrid({endpoint, section}) {

    const [datas, setDatas] = useState([]);

    const getData = async () =>{
        try {
            const response = await axios.get(endpoint);

            setDatas(response.data)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() =>{
        getData();
    }, [])


    return (
        <div className="card-grid">
            {datas.map(data => (
                <Card
                    key={data._id}
                    image={data.image}
                    text={data.name}
                    link={`/skills/${data._id}`} // lien vers la page détail
                />
            ))}
        </div>
    )
}

export default CardsGrid
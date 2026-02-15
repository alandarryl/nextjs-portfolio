import React from 'react';
import Link from 'next/link';

function Card({ image, text, link }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={text} />
            </div>
            <div className="card-text">
                <p>{text}</p>
                <p>
                    <Link href={link}>See More</Link>
                </p>
            </div>
        </div>
    );
}

export default Card
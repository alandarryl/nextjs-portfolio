import React from 'react';
import Link from 'next/link';

function NavBar() {
    return (
        <nav>
            <h2>.J</h2>
            <ul className='nav-items' >
                <Link href="./presentation" ><li className='item' >presentation </li> </Link>
                <Link href="./project" ><li className='item' >projets </li> </Link>
                <Link href="./skills" ><li className='item' >Competence </li> </Link>
                <Link href="./contact" ><li className='item' >Contacter </li> </Link>
            </ul>
        </nav>
    )
}

export default NavBar;
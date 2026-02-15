import React from 'react';
import Link from 'next/link';

function NavBar() {
    return (
        <nav>
            <Link href="/" ><h2 className='logo' >.J</h2></Link>
            <ul className='nav-items' >
                <li className='item' >
                    <Link href="/presentation" >presentation</Link> 
                </li>
                <li className='item' >
                    <Link href="/project" >projets </Link>
                </li> 
                <li className='item' >
                    <Link href="/skills" >Competence</Link> 
                </li> 
                <li className='item' >
                    <Link href="/contact" >Contacter  </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
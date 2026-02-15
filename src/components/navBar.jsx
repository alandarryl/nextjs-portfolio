import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from "../assets/three-horizontal-lines-icon.png";

function NavBar() {
    return (
        <nav>
            <h2 className='logo' >
                <Link href="/" >.J</Link>
            </h2>
            <ul className='nav-items' >
                <li className='item' >
                    <Link href="/presentation" >présentation</Link> 
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
            <div>
                <Image 
                    src={NavMenu}
                    alt='menu icon'
                    width={30}
                    height={30}
                />
            </div>
        </nav>
    )
}

export default NavBar;
import React from 'react';
import Image from 'next/image';

// image file
import Mug from "../../assets/projects-image/muggedbrew.png";
import Fleu from "../../assets/projects-image/fleureo.png";
import Gous from "../../assets/projects-image/goustivo.png";
import MovLib from "../../assets/projects-image/movie-library-lovat.png";
import Chroni from "../../assets/projects-image/chronievent.png";
import portf from "../../assets/projects-image/portfolio-old-version.png"
import Link from 'next/link';

function projectCard() {
    return (

        <section className="portofolio-section sec-padding " id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Mes Projets</h2>
                    </div>
                </div>
                <div className="row">
                    {/* <!-- Portofolio Item Start --> */}

                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <Image src={Mug} alt="thumb-up" />
                        </div>
                        <h3 className="portfolio-item-title">Muggeddrew</h3>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>
                                    Site web specialisé dans la vente de café et de grains de café, parfait pour les personnes aimant boire du bon café.
                                </p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li>Completer - <span>Aug 2024</span></li>
                                    <li>tech used - <span>Html, CSS, JavaScript</span></li>
                                    <li>Rôle - <span>Frontend Developpeur</span></li>
                                    <li>Lien - <span><Link href="#" target="_blank" >muggedbrew.netlify.app</Link></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Portofolio Item End --> */}


                                        {/* <!-- Portofolio Item Start --> */}

                                        <div className="portfolio-item">
                                            <div className="portfolio-item-thumbnail">
                                                <Image src={Gous} alt="thumb-up" />
                                            </div>
                                            <h3 className="portfolio-item-title">site vitrine de restaurant</h3>
                                            <div className="portfolio-item-details">
                                                <div className="description">
                                                    <p>
                                                        Site web realiser afin de permettre l'exposition accru a un restaurant local.
                                                    </p>
                                                </div>
                                                <div className="general-info">
                                                    <ul>
                                                        <li>Crée - <span>may 2024</span></li>
                                                        <li>tech - <span>Html, CSS, Bootstrap 5</span></li>
                                                        <li>Rôle - <span>Frontend Developpeur</span></li>
                                                        <li>Lien - <span><a href="#" target="_blank" > goustivo.netlify.app</a></span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                    
                                        {/* <!-- Portofolio Item End --> */}


                                        {/* <!-- Portofolio Item Start --> */}

                                        <div className="portfolio-item">
                                            <div className="portfolio-item-thumbnail">
                                                <Image src={Fleu} alt="thumb-up" />
                                            </div>
                                            <h3 className="portfolio-item-title">fLeureo</h3>
                                            <div className="portfolio-item-details">
                                                <div className="description">
                                                    <p>
                                                    site e-commerce de fleurs, realiser afin de permettre la ventre des fleur en ligne.
                                                    </p>
                                                </div>
                                                <div className="general-info">
                                                    <ul>
                                                        <li>Crée - <span>Aug 2024</span></li>
                                                        <li>tech - <span>Html, CSS, Bootstrap 5</span></li>
                                                        <li>Rôle - <span>Frontend Developpeur</span></li>
                                                        <li>Lien - <span><a href="#" target="_blank" > fleureo.netlify.app</a></span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                    
                                        {/* <!-- Portofolio Item End --> */}


                                        {/* <!-- Portofolio Item Start --> */}

                                        <div className="portfolio-item">
                                            <div className="portfolio-item-thumbnail">
                                                <Image src={MovLib} alt="thumb-up" />
                                            </div>
                                            <h3 className="portfolio-item-title">Library de film</h3>
                                            <div className="portfolio-item-details">
                                                <div className="description">
                                                    <p>
                                                        Librarie de film fais avec l'API TMDB.
                                                    </p>
                                                </div>
                                                <div className="general-info">
                                                    <ul>
                                                        <li>Crée - <span>june 2024</span></li>
                                                        <li>tech - <span>React, CSS, API</span></li>
                                                        <li>Rôle - <span>Frontend Developpeur</span></li>
                                                        <li>Lien - <span><a href="#" target="_blank" > https://react-movie-library-lovat.vercel.app/</a></span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                    
                                        {/* <!-- Portofolio Item End --> */}


                                        {/* <!-- Portofolio Item Start --> */}

                                        <div className="portfolio-item">
                                            <div className="portfolio-item-thumbnail">
                                                <Image src={Chroni} alt="thumb-up" />
                                            </div>
                                            <h3 className="portfolio-item-title">ChroniEvent</h3>
                                            <div className="portfolio-item-details">
                                                <div className="description">
                                                    <p>
                                                        plateforme permettant de suivre les derniere nouvelle concernant un evenement, de plus voir la durer avant expiration de l'evenement.
                                                    </p>
                                                </div>
                                                <div className="general-info">
                                                    <ul>
                                                        <li>Crée - <span>juliet 2024</span></li>
                                                        <li>tech - <span>Html, CSS</span></li>
                                                        <li>Rôle - <span>Frontend Developpeur</span></li>
                                                        <li>Lien - <span><a href="#" target="_blank" > chronievent.netlify.app</a></span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                    
                                        {/* <!-- Portofolio Item End --> */}


                </div>
            </div>
        </section>
    )
}

export default projectCard;
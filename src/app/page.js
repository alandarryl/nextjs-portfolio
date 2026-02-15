import Image from "next/image";
import Profile from "../assets/profile.jpg";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-container" >
        <h2>Bonjour, je suis <span>Developer Full-stack </span> </h2>
        <p>
            Mon nom est <span>Jonathan Okana</span>  je crée des applications web modernes et performantes. 
            Je combine créativité et technique pour offrir des expériences utilisateurs exceptionnelles.
        </p>
        <div className="btn" ><Link className="btn" href="/presentation" >En savoir plus</Link></div> 
        <div className="btn" ><Link className="btn" href="/contact" >Me contacter</Link> </div>
      </div>
      <div className="image-container" >
        <Image
          src={Profile}
          alt="profile"
        />
      </div>
    </div>
  );
}
